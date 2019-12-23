//cypress run -s cypress/integration/screenshot.spec.js

describe('Screenshot test', function () {
    it('Load page', function () {
        cy.visit('/');
        cy.get('div.chart canvas').then(_ => {
            cy.screenshot('General');
        })
    });

    it('Make screenshot bar', function () {
        cy.contains('button', 'Bar').click();
        cy.wait(1000);
        cy.get('div.chart canvas').screenshot('/chart/ofType/Bar/screen');
    });

    it('Make screenshot scatter', function () {
        cy.contains('button', 'Scatter').click();
        cy.wait(1000);
        cy.get('div.chart canvas').screenshot('/chart/ofType/Scatter/screen');
    });

    it('Make screenshot line', function () {
        cy.contains('button', 'Line').click();
        cy.wait(1000);
        cy.get('div.chart canvas').screenshot('/chart/ofType/Line/screen');
    })
});
