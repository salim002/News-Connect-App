import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const fetchNews = async () => {
    props.setProgress(10);
    let url = `https://gnews.io/api/v4/search?q=${props.category}&lang=en&country=${props.country}&max=30&apikey=${props.apiKey}`;
    setLoading(true);
    props.setProgress(30);
    try {
      let data = await fetch(url);
      if(!data.ok) {
        throw new Error('Failed to fetch data');
      }
      let parsedData = await data.json();
      props.setProgress(70);
      // console.log(parsedData.articles.length);
      setArticles(parsedData.articles);
    } catch (error) {
      setError("Error in fetching News, please try after some time");
    } finally {
      setLoading(false);
      props.setProgress(100);
    }
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsConnect`;
    fetchNews();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1 className="text-center" style={{ margin: '80px 0px' }}>
        NewsConnect - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      {error && <div className="text-center text-danger">{error}</div>}
      {!loading && !error && (
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ''}
                    description={element.description ? element.description.slice(0, 88) : ''}
                    imageUrl={element.image}
                    newsUrl={element.url}
                    author={element.source.name}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

News.defaultProps = {
  country: 'us',
  category: 'example',
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
