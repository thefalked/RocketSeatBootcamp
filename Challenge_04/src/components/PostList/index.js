import React, { Component } from "react";

import Post from "../Post";
import "./index.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Angel Lina",
          avatar:
            "https://latestmodapks.com/wp-content/uploads/2017/04/image_20170412_112801_50-264x300.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://www.trickscity.com/wp-content/uploads/2018/06/anonymous-dp-for-boys.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 1,
        author: {
          name: "Angel Lina",
          avatar:
            "https://latestmodapks.com/wp-content/uploads/2017/04/image_20170412_112801_50-264x300.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://www.trickscity.com/wp-content/uploads/2018/06/anonymous-dp-for-boys.jpg"
            },
            content:
              "Conteúdo do comentário Responsável por armazenar os dados da listagem de post, esses dados devem ficar dentro do state do componente e não em uma variável comum, por exemplo:"
          },
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://www.trickscity.com/wp-content/uploads/2018/06/anonymous-dp-for-boys.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="container">
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
