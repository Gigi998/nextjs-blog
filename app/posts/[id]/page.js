import React from 'react';
import { getPostData, getSortedPostData } from '../../../lib/posts';
import utilsStyle from '../../../styles/utils.module.css';

export async function generateMetadata({ params }) {
  const id = params.id;
  const postData = await getPostData(id);

  return {
    title: postData.title,
  };
}

const singlePost = async ({ params: { id } }) => {
  const postData = await getPostData(id);

  return (
    <div>
      {' '}
      <h1 className={utilsStyle.headingXl}>{postData.title}</h1>
      <div className={utilsStyle.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
};

// SSG
export async function generateStaticParams() {
  const data = getSortedPostData();

  return data.map((i) => ({
    id: i.id,
  }));
}

export default singlePost;
