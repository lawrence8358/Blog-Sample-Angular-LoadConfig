import { BlogSampleAngularLoadConfigPage } from './app.po';

describe('blog-sample-angular-load-config App', () => {
  let page: BlogSampleAngularLoadConfigPage;

  beforeEach(() => {
    page = new BlogSampleAngularLoadConfigPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
