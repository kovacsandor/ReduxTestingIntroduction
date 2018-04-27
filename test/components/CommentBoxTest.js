import { expect, renderComponent } from '../test_helper'

import CommentBox from '../../src/components/CommentBox'

describe(`CommentBox`, () => {

	let component

	beforeEach(() => {

		component = renderComponent(CommentBox)
	})

	it(`Has the class 'comment-box'`, () => {

		expect(component).to.have.class('comment-box')
	})

	it(`Has a textarea`, () => {

		expect(component.find(`textarea`)).to.exist
	})

	it(`Has a button`, () => {

		expect(component.find(`button`)).to.exist
	})

	describe(`Entering some text`, () => {

		beforeEach(() => {

			component.find(`textarea`).simulate(`change`, `new coment 123`)
		})

		it(`Shows text that is entered`, () => {

			expect(component.find(`textarea`)).to.have.value(`new coment 123`)
		})

		it(`When submitted, clears the input`, () => {
			component.simulate(`submit`)
			expect(component.find(`textarea`)).to.have.value(``)
		})
	})
})