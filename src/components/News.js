import React, { Component } from "react";
import NewsItems from "./NewsItems";
class News extends Component {
  articles = [
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title:
        "Israel Gaza live news: Israel says it attacked ‘underground sites’ in Gaza",
      description:
        'The Israeli military says senior Hamas figures were hiding in the sites, which were "significantly damaged".',
      url: "http://www.bbc.co.uk/news/live/world-middle-east-67446662",
      urlToImage:
        "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
      publishedAt: "2023-11-17T05:07:22.9653043Z",
      content:
        "Israeli forces have warned people in some towns in the Khan Younis area to evacuate their homes and head to shelters.\r\nKhan Younis is the largest city in southern Gaza - where people fled to after be… [+871 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "IBM suspends ads on X after they appeared next to Nazi posts",
      description:
        "The decision came a day after owner Elon Musk endorsed an apparent antisemitic conspiracy theory.",
      url: "http://www.bbc.co.uk/news/world-us-canada-67446797",
      urlToImage:
        "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
      publishedAt: "2023-11-17T04:22:19.2810697Z",
      content:
        'IBM has suspended advertising on X, formerly known as Twitter, after a report said its ads were placed next to posts praising Adolf Hitler and Nazism.\r\nThe company said it was "completely unacceptabl… [+3625 chars]',
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title:
        "Trump assails judge and clerk in fraud trial as gag order temporarily lifts",
      description:
        'The ex-president calls the actions of court officials in his New York fraud trial a "disgrace".',
      url: "http://www.bbc.co.uk/news/world-us-canada-67446060",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/1102A/production/_131747696_trump.jpg",
      publishedAt: "2023-11-17T04:22:18.3196273Z",
      content:
        "Donald Trump has assailed a judge and clerk handling his New York fraud trial as a gag order banning him from criticising court personnel was paused.\r\nThe ex-president sued the judge in the civil cas… [+2552 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "When Apec 'family photos' used to be fun",
      description:
        "World leaders wore suits this year, but they once dawned traditional silk jackets in China and ponchos in Peru.",
      url: "http://www.bbc.co.uk/news/world-us-canada-67446831",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/CE26/production/_131747725_p0gt6brv.jpg",
      publishedAt: "2023-11-17T01:22:18.4608374Z",
      content:
        "World leaders wore suits for this year's annual Apec 'family photo', but they once dawned traditional silk jackets in China and ponchos in Peru. Here's a look back to some notable vestments.\r\nVideo b… [+18 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "Sean Combs: Singer Cassie accuses rap mogul of rape and abuse",
      description:
        'The rap mogul is labelled a "serial domestic abuser" in a lawsuit, which his attorney called "outrageous".',
      url: "http://www.bbc.co.uk/news/world-us-canada-67446570",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/6B52/production/_131747472_gettyimages-1693926869-1.jpg",
      publishedAt: "2023-11-16T23:22:18.945004Z",
      content:
        'Rap artist Sean "Diddy" Combs has been accused of rape and sex trafficking by a female singer.\r\nIn a lawsuit seen by the BBC, ex-girlfriend Casandra Ventura said she was trapped for a decade in a cyc… [+2079 chars]',
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title:
        "Breonna Taylor: Jury deadlocks over ex-officer Brett Hankison's fate",
      description:
        "A jury deadlocked on charges over whether Brett Hankison violated the rights of Ms Taylor and her neighbours.",
      url: "http://www.bbc.co.uk/news/world-us-canada-67446315",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/F3A6/production/_131747326_gettyimages-1228769188-1.jpg",
      publishedAt: "2023-11-16T22:52:21.2122296Z",
      content:
        "The federal trial of the ex-police officer accused of violating Breonna Taylor's civil rights has ended in a mistrial with a deadlocked jury.\r\nIt marks the second time Brett Hankison has avoided a co… [+275 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "NFL star Jason Kelce tops iTunes chart with new Christmas hit",
      description:
        "The NFL star joined his brother Travis Kelce to reimagine the Christmas hit Fairytale of New York.",
      url: "http://www.bbc.co.uk/news/world-us-canada-67443508",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/72BE/production/_131747392_gettyimages-1728649801.jpg",
      publishedAt: "2023-11-16T22:52:19.7594658Z",
      content:
        "Philadelphia Eagles player Jason Kelce said he is humbled by the support fans have shown his new Christmas single, which features his brother, Kansas City Chiefs star Travis Kelce. \r\nThe two American… [+1818 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "Al-Shifa: Gaza hospital director says no water or oxygen left",
      description:
        'The Al-Shifa director says people are "screaming from thirst", as Israel says its "discreet" search continues.',
      url: "http://www.bbc.co.uk/news/world-middle-east-67442045",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/647C/production/_131742752_ec1c7ed9a9df14dd1406f1e828c35c4491ac7872-1.jpg",
      publishedAt: "2023-11-16T22:07:20.697385Z",
      content:
        'The director of the Gaza Strip\'s main hospital raided by Israeli soldiers says the facility has now run out of oxygen and water, and patients "are screaming from thirst".\r\nMuhammad Abu Salmiya said "… [+4387 chars]',
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "Canadian man guilty of Muslim family's murders in Ontario",
      description:
        "Four members of the Afzaal family died after they were deliberately run over with a truck in Ontario.",
      url: "http://www.bbc.co.uk/news/world-us-canada-67445463",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/04E4/production/_118925210_991200b2-e39b-4fc4-b3a7-323949220a01.jpg",
      publishedAt: "2023-11-16T19:22:20.6263235Z",
      content:
        "A Canadian man has been convicted of murder in the 2021 killings of a Muslim family in London, Ontario after an eleven-week trial.\r\nBut the jury did not specify whether Nathaniel Veltman, 22, was mot… [+1377 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title:
        "Israel-Gaza live news: US warning as Israel storms Gaza's main hospital",
      description:
        'The US urges against a "firefight in a hospital" after Israeli commandos move against Al-Shifah.',
      url: "http://www.bbc.co.uk/news/live/world-middle-east-67423274",
      urlToImage:
        "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
      publishedAt: "2023-11-15T04:22:20.5725168Z",
      content:
        "The IDF earlier confirmed that it is carrying out precise and targeted operations against Hamas in a specified area in the Al-Shifa Hospital, based on intelligence information.\r\nIn a post on X\r\n, the… [+1206 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
  }
  render() {
    return (
      <div className="container my-4">
        <h1 className="text-center">New Application</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-4">
                <NewsItems
                  title={element.title}
                  description={element.description}
                  image={element.urlToImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
