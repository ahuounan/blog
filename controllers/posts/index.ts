import { LocalDatabaseController } from 'controllers/localController';

import { PostData } from './types';
import { isPostData } from './validators';

class LocalPostsController extends LocalDatabaseController<PostData> {
  constructor() {
    super('localDatabase/posts.json', isPostData);
  }
}

export const PostsController = new LocalPostsController();
