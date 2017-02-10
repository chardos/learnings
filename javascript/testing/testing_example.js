import * as chai from 'chai';
const expect = chai.expect;
import { mount, shallow, render } from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import Pagination from './Pagination';
const noop = function(){};
const createPaginationComponent = (currentPage, numberOfPages, onPageChange=noop) => {
    return shallow(<Pagination
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        onPageChange={onPageChange}
    />);
}

describe.only('<Pagination />', () => {
    context('while on Page 1', () => {
        const component = createPaginationComponent(1, 5);

        it('"first" button is disabled', () => {
            expect(
                component.find('.pagination__item--first').hasClass('pagination__item--disabled')
            ).to.eq(true);
        })

        it('"prev" button is disabled', () => {
            expect(
                component.find('.pagination__item--prev').hasClass('pagination__item--disabled')
            ).to.eq(true);
        })
    })

    context('while on last page', () => {
        const component = createPaginationComponent(5, 5);

        it('"next" button is disabled', () => {
            expect(
                component.find('.pagination__item--next').hasClass('pagination__item--disabled')
            ).to.eq(true);
        });

        it('"last" button is disabled', () => {
            expect(
                component.find('.pagination__item--last').hasClass('pagination__item--disabled')
            ).to.eq(true);
        });
    });

    context('while on a middle page', () => {
        const component = createPaginationComponent(3, 5);

        it('no buttons are disabled', () => {
            expect(
                component.find('.pagination__item--first').hasClass('pagination__item--disabled')
            ).to.eq(false);
            expect(
                component.find('.pagination__item--prev').hasClass('pagination__item--disabled')
            ).to.eq(false);
            expect(
                component.find('.pagination__item--next').hasClass('pagination__item--disabled')
            ).to.eq(false);
            expect(
                component.find('.pagination__item--last').hasClass('pagination__item--disabled')
            ).to.eq(false);
        });
    });

    context('rendering the correct number of pages', () => {
        it('Given 5 total pages it should render 5 pages', () => {
            const component = createPaginationComponent(3, 5);
            expect(component.find('.pagination__item--page')).to.have.length(5);
        });

        it('Given 3 total pages it should render 3 pages', () => {
            const component = createPaginationComponent(1, 3);
            expect(component.find('.pagination__item--page')).to.have.length(3);
        });

        it('Given more than 5 total pages, it should render 5 pages', () => {
            const component = createPaginationComponent(2, 7);
            expect(component.find('.pagination__item--page')).to.have.length(5);
        });
    })

    context('the buttons are working as expected', () => {
        it('clicking a page button should call the onPageChange handler', () => {
            const sandbox = sinon.sandbox.create();
            const stubbedHandler = sandbox.stub();
            const component = createPaginationComponent(1,5,stubbedHandler);

            sinon.assert.notCalled(stubbedHandler);
            component.find('.pagination__item--last').simulate('click');
            sinon.assert.calledOnce(stubbedHandler);

        });

        it('clicking a page button should take you to that page', () => {

        });
    })

    context('for #getPageRange(currentPage, numberOfPages)', () => {
        const tests = [{
            currentPage: 3,
            numberOfPages: 8,
            expectedRange: {low: 1, high: 5}
        }, {
            currentPage: 7,
            numberOfPages: 12,
            expectedRange: {low: 5, high: 9}
        }, {
            currentPage: 2,
            numberOfPages: 4,
            expectedRange: {low: 1, high: 4}
        }, {
            currentPage: 12,
            numberOfPages: 13,
            expectedRange: {low: 9, high: 13}
        }, {
            currentPage: 6,
            numberOfPages: 8,
            expectedRange: {low: 4, high: 8}
        }];

        const component = shallow(<Pagination
            numberOfPages={5}
            currentPage={1}
            onPageChange={noop}
        />);
        const getPageRange = component.instance().getPageRange;

        context('given a currentPage and numberOfPages, should return the correct range', () => {
            tests.forEach((test) => {
                const testTitle = `currentPage: ${test.currentPage}, numberOfPages: ${test.numberOfPages}, should return low: ${test.expectedRange.low}, high: ${test.expectedRange.high}`

                it(testTitle, () => {
                    const result = getPageRange(test.currentPage, test.numberOfPages);
                    expect(result).to.deep.eq(test.expectedRange);
                })
            })
        });
    });
});
