import { Books } from './like.po';
import { browser, logging } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';
import { elementStyleProp } from '@angular/core/src/render3';
import { invalid } from '@angular/compiler/src/render3/view/util';



describe('Book tests', () => {
    let page: Books;
    let like;
    let showLikes;


    beforeEach(() => {
        page = new Books();
    });


    it('Testing of like review', () => {
        page.navigateTo();
        like=page.getLike();
       var before=like.getText();
        like.click().then(function(){
            if(before=="like"){
                expect(like.getText()).toContain('Liked'); 
            }
            else if(before=="liked"){
                expect(like.getText()).toContain('Like'); 
            }
            else
            expect(invalid)
        })
      });
      it('Testing of unlike review', () => {
        page.navigateTo();
        like=page.getLike();
       var before=like.getText();
        like.click().then(function(){
            if(before=="like"){
                expect(like.getText()).toContain('Liked'); 
            }
            else if(before=="liked"){
                expect(like.getText()).toContain('Like'); 
            
            }
        else
        expect(invalid)
    })
      });
      it('Testing of like review', () => {
        page.navigateTo();
        like=page.getLike();
       var before=like.getText();
        like.click().then(function(){
            if(before=="like"){
                expect(like.getText()).toContain('Liked'); 
            }
            else if(before=="liked"){
                expect(like.getText()).toContain('Like'); 
            }
            else
            expect(invalid)
        })
      });
      it('Testing of unlike review(should decrease the number of likes)', () => {
        like=page.getLike();
        showLikes=page.getShowLikes();
        var showLikesBefore=showLikes.getAttribute('value');
       var before=like.getText();
        like.click().then(function(){
    
                expect(showLikes.getAttribute('value')).toEqual(showLikesBefore-1);
            })
      });
      it('Testing of like review(should increase the number of likes)', () => {
        like=page.getLike();
        showLikes=page.getShowLikes();
        var showLikesBefore=showLikes.getAttribute('value');
       var before=like.getText();
        like.click().then(function(){
                expect(showLikes.getAttribute('value')).toEqual(showLikesBefore+1);
      })
          
      });
      it('Testing of unlike review(should decrease the number of likes)', () => {
        like=page.getLike();
        showLikes=page.getShowLikes();
        var showLikesBefore=showLikes.getAttribute('value');
       var before=like.getText();
        like.click().then(function(){
       
                expect(showLikes.getAttribute('value')).toEqual(showLikesBefore-1);
      })
      });
      

});
    /******************************************************************************************************* */
