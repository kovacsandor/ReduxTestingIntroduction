// import { renderComponent , expect } from '../test_helper';
// import App from '../../src/components/app';

// describe('App' , () => {
//   let component;

//   beforeEach(() => {
//     component = renderComponent(App);
//   });

//   it('renders something', () => {
//     expect(component).to.exist;
//   });
// });

import { expect, renderComponent } from '../test_helper'

import App from '../../src/components/app'

describe(`App`, () => {

	let component

	beforeEach(() => {
		component = renderComponent(App)
	})

	it(`Shows a CommentBox`, () => {
		expect(component.find(`.comment-box`)).to.exist
	})
})