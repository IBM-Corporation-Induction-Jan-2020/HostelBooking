
import React from 'react'
//import CardDeck from 'react-bootstrap/CardDeck';
import CardDeck from 'react-bootstrap/CardDeck';
//import Card from 'react-bootstrap/Card';
import Card from 'react-bootstrap/Card';
import './review-styles.css'
import NavDisplay from './NavBar/navbar';
import FooterDisplay from './HostelDisplay/footer';

class Review extends React.Component {
  render() {
    return (
      <div>
      <NavDisplay />
      <div class="jumbotron">
        <h1 class="display-4">Guest Reviews!</h1>
        {/* <p class="lead">Guest Reviews</p> */}
        <hr class="my-4" />
        <p>Listen to what our guest have to say !!</p>
      </div>

      <div className="container_review">
        <CardDeck >
          <Card bg="light">
            <Card.Body>
              <Card.Title>Great Location</Card.Title>
              <Card.Text>
                Great location, good service and lovely people.Situated at th heart of the city.Pubs and clubs are nearby!!
              </Card.Text>
              <div className="review-card-content__star">{renderStars(5)}</div>
              <p className="bottom"><i><b>-Aniket Gupta</b></i></p>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">10 days ago</small>
            </Card.Footer>
          </Card>

          <Card bg="light">
            <Card.Body>
              <Card.Title>Great Hostel</Card.Title>
              <Card.Text>
                I stayed one night with friends and it was really good, great for partying! It’s very clean as well! Really loved the vibe of the hostel. Everyone was really lovely
              </Card.Text>
              <div className="review-card-content__star">{renderStars(5)}</div>
              <p className="bottom"><i><b>-Anup Patel</b></i></p>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">2 days ago</small>
            </Card.Footer>
          </Card>

          <Card bg="light">
            <Card.Body>
              <Card.Title>Great Atmosphere</Card.Title>
              <Card.Text>
                I stayed one night with friends and it was really good, great for partying! It’s very clean as well! Really loved the vibe of the hostel. Everyone was really lovely, Sky at the reception especially, shoutout to her!
              </Card.Text>
              <div className="review-card-content__star">{renderStars(5)}</div>
              <p className="bottom"><i><b>-Kaushal</b></i></p>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">5 days ago</small>
            </Card.Footer>

          </Card>


          <Card bg="light">
            <Card.Body>
              <Card.Title>Very Helpful!!</Card.Title>
              <Card.Text>
                Got us on a last minute discounted trip on the broomstick and even moved our accomdation in airlie to save us a night! Alex was very helpful and sorted everything for us and gave us loads of good advice!!
              </Card.Text>
              <div className="review-card-content__star">{renderStars(5)}</div>
              <p className="bottom"><i><b>-Pranav</b></i></p>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">15 days ago</small>
            </Card.Footer>
          </Card>


        </CardDeck>
      </div>
      <FooterDisplay/>
      </div>
    )
  }
}

function renderStars(stars) {
  const output = [];

  for (let i = 0; i < stars; i++) {
    output.push(
      <li className="review-card-content-stars__item star" key={i}>
        <img src="https://cdn1.iconfinder.com/data/icons/basic-ui-icon-rounded-colored/512/icon-06-512.png" />
      </li>
    );
  }

  return output;
}

export default Review