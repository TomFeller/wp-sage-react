import DataStore from 'flux/stores/DataStore.js';
import classNames from 'classnames';

class Archive extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category: DataStore.getAllPosts()
    };
  }

  render() {
    console.log(this.state.category);
    let archiveData = DataStore.getAllPosts(),
      getArchivePosts = archiveData.map((post, i) => {
        return (
          <div key={i}
               className={classNames(
                 'post',
                 'post-' + post.id)}>
            <h3>{post.title.rendered}</h3>
          </div>
        );
      });

    return (
      <div id='archive' className='archive'>
        <h2 className='archive-title'>Archive template</h2>
        <div className='archive-content'>{getArchivePosts}</div>
      </div>
    );
  }
}

export default Archive;