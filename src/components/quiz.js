import React, { Component } from "react";
import "../App.css";

class Quiz extends Component {
  state = {
    start: true,
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
    quizAnswers: []
  };

  componentDidMount() {}

  buttonClick() {
    this.setState({ start: false });
    this.setState({ question1: true });
    console.log(this.state);
  }

  buttonClickQ1A() {
    this.setState({ quizAnswers: this.state.quizAnswers.push("Business") });
    this.setState({ question1: false });
    this.setState({ question2: true });
    console.log(this.state);
  }

  buttonClickQ1B() {
    this.setState({ quizAnswers: this.state.quizAnswers.push("Consumers") });
    this.setState({ question1: false });
    this.setState({ question2: true });
    console.log(this.state);
  }

  buttonClickQ2A() {
    this.setState(prevState => ({
      quizAnswers: ["new value", ...prevState.quizAnswers]
    }));
    this.setState({ question2: false });
    this.setState({ question3: true });
    console.log(this.state);
  }

  buttonClickQ2B() {
    this.setState({ quizAnswers: this.state.quizAnswers.push("Coca-Cola") });
    this.setState({ question2: false });
    this.setState({ question3: true });
    console.log(this.state);
  }

  render() {
    //set up start page
    // on start render first question by setting question 1 to true

    return (
      <div>
        {this.state.start ? (
          <div class="quizGrid">
            <div class="quizHeader d-flex justify-content-center">
              what is your marketing personality?
            </div>
            <div class="quizSecondaryHeader">
              Find out what your brand personality is with this 3-minute quiz!
            </div>
            <button
              class="quizStartButton"
              onClick={this.buttonClick.bind(this)}
            >
              Start Quiz
            </button>
          </div>
        ) : null}
        {this.state.question1 ? (
          <div class="quizGrid">
            <div class="quizHeader d-flex justify-content-center">
              what is your marketing personality?
            </div>
            <div class="quizSecondaryHeader">
              Do you sell to business or consumers?
            </div>
            <div class="row quizAnswerSection">
              <button
                class="quizAnswerChoice"
                onClick={this.buttonClickQ1A.bind(this)}
              >
                Businesses
              </button>
              <button
                class="quizAnswerChoice"
                onClick={this.buttonClickQ1B.bind(this)}
              >
                Consumers
              </button>
            </div>
          </div>
        ) : null}
        {this.state.question2 ? (
          <div class="quizGrid">
            <div class="quizHeader d-flex justify-content-center">
              what is your marketing personality?
            </div>
            <div class="quizSecondaryHeader">
              Which brand's marketing is your favorite?
            </div>
            <div class="row quizAnswerSection">
              <button
                class="quizAnswerChoice"
                onClick={this.buttonClickQ2A.bind(this)}
              >
                Sherwin-Williams
              </button>
              <button
                class="quizAnswerChoice"
                onClick={this.buttonClickQ2B.bind(this)}
              >
                Coca-Cola
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Quiz;
