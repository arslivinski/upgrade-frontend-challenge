import { createContext, useContext, useEffect, useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { SIGN_UP_BASE_PATH } from '../../SignUpConstants';

export const SignUpContext = createContext(undefined);

export const SignUpActions = {
	next: 'next',
	prev: 'prev',
	error: 'error',
	reset: 'reset',
};

export const SignUpSteps = {
	initial: '',
	more: 'more-info',
	confirm: 'confirmation',
	success: 'success',
	error: 'error',
};

const StepsOrder = [
	SignUpSteps.initial,
	SignUpSteps.more,
	SignUpSteps.confirm,
	SignUpSteps.success,
];

function init() {
	return {
		step: SignUpSteps.initial,
		data: {
			name: '',
			email: '',
			password: '',
			color: '',
			terms: false,
		},
	};
}

function getNextStep(actualStep) {
	const index = StepsOrder.indexOf(actualStep);
	const nextIndex = index + 1;

	if (nextIndex < StepsOrder.length) {
		return StepsOrder[nextIndex];
	}

	throw new Error('Unsuported operation');
}

function getPrevStep(actualStep) {
	const index = StepsOrder.indexOf(actualStep);
	const prevIndex = index - 1;

	if (prevIndex >= 0) {
		return StepsOrder[prevIndex];
	}

	throw new Error('Unsuported operation');
}

function reducer(state, { type, payload }) {
	switch (type) {
		case SignUpActions.next: {
			return {
				...state,
				step: getNextStep(state.step),
				data: {
					...state.data,
					...payload,
				},
			};
		}
		case SignUpActions.prev: {
			return {
				...state,
				step: getPrevStep(state.step),
			};
		}
		case SignUpActions.error: {
			return {
				...state,
				step: SignUpSteps.error,
			};
		}
		case SignUpActions.reset: {
			return init();
		}
	}
}

export function SignUpProvider({ children }) {
	const value = useReducer(reducer, undefined, init);

	const location = useLocation();
	const navigate = useNavigate();

	const step = value[0].step;
	const path = location.pathname.replace(SIGN_UP_BASE_PATH, '/').split('/').at(-1);

	useEffect(() => {
		if (path !== step) {
			navigate(step);
		}
	}, [path, step]);

	return <SignUpContext.Provider value={value}>{children}</SignUpContext.Provider>;
}

export function useSignUpContext() {
	const value = useContext(SignUpContext);

	if (value === undefined) {
		throw new Error(
			'`useSignUpContext` must be used on a component descendant of `SignUpProvider`',
		);
	}

	return { state: value[0], dispatch: value[1] };
}
