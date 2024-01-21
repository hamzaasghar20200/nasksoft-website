import React, { useEffect } from 'react'
import Blog_detail_component from '../Components/Blog_detail_component'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet';
import { useData } from '../Context/Context_Provider';
import { useParams } from 'react-router-dom';

function Blog_details() {
  const { getBlogDetail, blogDetaldata } = useData();
  const params = useParams()
  useEffect(() => {
    getBlogDetail(params.id);
  }, []);

  if (!blogDetaldata) {
    return <div>Loading...</div>;
  }
  const title = blogDetaldata.meta_title || 'Default Title';
  const description = blogDetaldata.meta_description || 'Default Description';
  const tags = blogDetaldata.meta_tags || 'Default Tags';
  const tagArray = tags.split(',').map((tag) => tag.trim());
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {tagArray.map((tag, index) => (
          <meta name="keywords" content={tag} key={index} />
        ))}
      </Helmet>
      <Navbar />
      <Blog_detail_component />
      <Footer />
    </>
  )
}

export default Blog_details
