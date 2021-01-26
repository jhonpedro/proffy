import styled from 'styled-components'

export const TextAreaContainer = styled.div`
	position: relative;

	+ TextAreaContainer {
		margin-top: 1.4rem;
	}

	label {
		font-size: 1.4rem;
	}

	:focus-within::after {
		width: calc(100% - 3.2rem);
		height: 2px;
		content: '';
		background: var(--color-primary-light);
		position: absolute;
		left: 1.6rem;
		right: 1.6rem;
		bottom: 7px;
	}
`

export const TextArea = styled.textarea`
	width: 100%;
	height: 16rem;
	min-height: 8rem;
	margin-top: 0.8rem;
	border-radius: 0.8rem;
	background: var(--color-input-background);
	border: 1px solid var(--color-line-in-white);
	outline: none;
	resize: vertical;
	padding: 1.2rem 1.6rem;
`
