import React, { Component } from "react";
import Quiz2 from "./quiz2.js"
import "../App.css";

class Quiz extends Component {
  state = {
    start: true,
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
    form: false,
    quizAnswers: []
  };

  componentDidMount() {}

  buttonClick() {
    this.setState({ start: false });
    this.setState({ question1: true });
    console.log(this.state);
  }

  buttonClickQ1A() {
    this.setState({ quizAnswers: this.state.quizAnswers.concat("Business") });
    this.setState({ question1: false });
    this.setState({ question2: true });
    console.log(this.state);
  }

  buttonClickQ1B() {
    this.setState({ quizAnswers: this.state.quizAnswers.concat("Consumers") });
    this.setState({ question1: false });
    this.setState({ question2: true });
    console.log(this.state);
  }

  buttonClickQ2A() {
    this.setState({
      quizAnswers: this.state.quizAnswers.concat("Sherwin-Williams")
    });
    this.setState({ question2: false });
    this.setState({ question3: true });
    console.log(this.state);
  }

  buttonClickQ2B() {
    this.setState({ quizAnswers: this.state.quizAnswers.concat("CocaCola") });
    this.setState({ question2: false });
    this.setState({ question3: true });
    console.log(this.state);
  }

  buttonClickQ2C() {
    this.setState({ quizAnswers: this.state.quizAnswers.concat("Apple") });
    this.setState({ question2: false });
    this.setState({ question3: true });
    console.log(this.state);
  }

  buttonClickQ2D() {
    this.setState({ quizAnswers: this.state.quizAnswers.concat("Snapchat") });
    this.setState({ question2: false });
    this.setState({ question3: true });
    console.log(this.state);
  }

  buttonClickQ3A() {
    this.setState({ quizAnswers: this.state.quizAnswers.concat("Modern") });
    this.setState({ question3: false });
    this.setState({ question4: true });
    console.log(this.state);
  }

  buttonClickQ3B() {
    this.setState({ quizAnswers: this.state.quizAnswers.concat("Classic") });
    this.setState({ question3: false });
    this.setState({ question4: true });
    console.log(this.state);
  }

  buttonClickQ3C() {
    this.setState({ quizAnswers: this.state.quizAnswers.concat("Authentic") });
    this.setState({ question3: false });
    this.setState({ question4: true });
    console.log(this.state);
  }

  buttonClickQ3D() {
    this.setState({ quizAnswers: this.state.quizAnswers.concat("Caring") });
    this.setState({ question3: false });
    this.setState({ question4: true });
    console.log(this.state);
  }

  buttonClickQ4A() {
    this.setState({ quizAnswers: this.state.quizAnswers.concat("1 Point") });
    this.setState({ question4: false });
    this.setState({ question5: true });
    console.log(this.state);
  }

  buttonClickQ4B() {
    this.setState({ quizAnswers: this.state.quizAnswers.concat("2 Point") });
    this.setState({ question4: false });
    this.setState({ question5: true });
    console.log(this.state);
  }

  buttonClickQ4C() {
    this.setState({ quizAnswers: this.state.quizAnswers.concat("3 Point") });
    this.setState({ question4: false });
    this.setState({ question5: true });
    console.log(this.state);
  }

  buttonClickQ4D() {
    this.setState({ quizAnswers: this.state.quizAnswers.concat("4 Point") });
    this.setState({ question4: false });
    this.setState({ question5: true });
    console.log(this.state);
  }

  buttonClickQ4E() {
    this.setState({ quizAnswers: this.state.quizAnswers.concat("5 Point") });
    this.setState({ question4: false });
    this.setState({ question5: true });
    console.log(this.state);
  }

  buttonClickQ5A() {
    this.setState({
      quizAnswers: this.state.quizAnswers.concat("To serve...")
    });
    this.setState({ question5: false });
    this.setState({ form: true });
    console.log(this.state);
  }

  buttonClickQ5B() {
    this.setState({
      quizAnswers: this.state.quizAnswers.concat("To innovate...")
    });
    this.setState({ question5: false });
    this.setState({ form: true });
    console.log(this.state);
  }

  buttonClickQ5C() {
    this.setState({
      quizAnswers: this.state.quizAnswers.concat("To maintain...")
    });
    this.setState({ question5: false });
    this.setState({ form: true });
    console.log(this.state);
  }

  buttonClickQ5D() {
    this.setState({
      quizAnswers: this.state.quizAnswers.concat("To build/craft...")
    });
    this.setState({ question5: false });
    this.setState({ form: true });
    console.log(this.state);
  }

  formView() {
    console.log(this.state);
  }

  render() {
    //set up start page
    // on start render first question by setting question 1 to true

    return (
      <div>
        {this.state.start ? (
          <div class="quizGrid2">
            <div class="quizHeader2 d-flex justify-content-center">
              we want to meet you!
            </div>
            <div class="quizSecondaryHeader2">
              Find out what your brand personality is with this 3-minute quiz!
            </div>
            <button
              class="quizStartButton2"
              onClick={this.buttonClick.bind(this)}
            >
              Start Quiz
            </button>
          </div>
        ) : null}

        {this.state.question1 ? (
          <div class="quizGrid2">
            <div class="quizHeader2 d-flex justify-content-center">
              we want to meet you!
            </div>
            <div class="quizSecondaryHeader2">
              Do you sell to business or consumers?
            </div>
            <div class="row quizAnswerSection">
              <button
                class="quizAnswerChoice2"
                onClick={this.buttonClickQ1A.bind(this)}
              >
                Businesses
              </button>
              <button
                class="quizAnswerChoice2"
                onClick={this.buttonClickQ1B.bind(this)}
              >
                Consumers
              </button>
            </div>
          </div>
        ) : null}

        {this.state.question2 ? (
          <div class="quizGrid2">
            <div class="quizHeader2 d-flex justify-content-center">
              we want to meet you!
            </div>
            <div class="quizSecondaryHeader2">
              Which brand's marketing is your favorite?
            </div>
            <div class="row quizAnswerSection">
              <button
                class="quizAnswerChoice2"
                onClick={this.buttonClickQ2A.bind(this)}
              >
                Sherwin-Williams
              </button>
              <button
                class="quizAnswerChoice2"
                onClick={this.buttonClickQ2B.bind(this)}
              >
                Coca-Cola
              </button>
              <button
                class="quizAnswerChoice2"
                onClick={this.buttonClickQ2C.bind(this)}
              >
                Apple
              </button>
              <button
                class="quizAnswerChoice2"
                onClick={this.buttonClickQ2D.bind(this)}
              >
                Snapchat
              </button>
            </div>
          </div>
        ) : null}

        {this.state.question3 ? (
          <div class="quizGrid2">
            <div class="quizHeader2 d-flex justify-content-center">
              we want to meet you!
            </div>
            <div class="quizSecondaryHeader2">
              Which word most accurately describes your brand?
            </div>
            <div class="row quizAnswerSection">
              <button
                class="quizAnswerChoice2"
                onClick={this.buttonClickQ3A.bind(this)}
              >
                Modern
              </button>
              <button
                class="quizAnswerChoice2"
                onClick={this.buttonClickQ3B.bind(this)}
              >
                Classic
              </button>
              <button
                class="quizAnswerChoice2"
                onClick={this.buttonClickQ3C.bind(this)}
              >
                Authentic
              </button>
              <button
                class="quizAnswerChoice2"
                onClick={this.buttonClickQ3D.bind(this)}
              >
                Caring
              </button>
            </div>
          </div>
        ) : null}

        {this.state.question4 ? (
          <div class="quizGrid2">
            <div class="quizHeader2 d-flex justify-content-center">
              we want to meet you!
            </div>
            <div class="quizSecondaryHeader2">
              How much does your company prioritize technology and innovation?
            </div>
            <div class="row quizAnswerSection">
              <button
                class="quizAnswerChoice2"
                onClick={this.buttonClickQ4A.bind(this)}
              >
                1 Point
              </button>
              <button
                class="quizAnswerChoice2"
                onClick={this.buttonClickQ4B.bind(this)}
              >
                2 Points
              </button>
              <button
                class="quizAnswerChoice2"
                onClick={this.buttonClickQ4C.bind(this)}
              >
                3 Points
              </button>
              <button
                class="quizAnswerChoice2"
                onClick={this.buttonClickQ4D.bind(this)}
              >
                4 Points
              </button>
              <button
                class="quizAnswerChoice2"
                onClick={this.buttonClickQ4E.bind(this)}
              >
                5 Points
              </button>
            </div>
          </div>
        ) : null}

        {this.state.question5 ? (
          <div class="quizGrid2">
            <div class="quizHeader2 d-flex justify-content-center">
              we want to meet you!
            </div>
            <div class="quizSecondaryHeader2">
              Which objective most accurately describes your brand?
            </div>
            <div class="row quizAnswerSection">
              <button
                class="quizAnswerChoice2"
                onClick={this.buttonClickQ5A.bind(this)}
              >
                To serve...
              </button>
              <button
                class="quizAnswerChoice2"
                onClick={this.buttonClickQ5B.bind(this)}
              >
                To innovate...
              </button>
              <button
                class="quizAnswerChoice2"
                onClick={this.buttonClickQ5C.bind(this)}
              >
                To maintain...
              </button>
              <button
                class="quizAnswerChoice2"
                onClick={this.buttonClickQ5D.bind(this)}
              >
                To build/craft...
              </button>
            </div>
          </div>
        ) : null}

        {this.state.form ? (
          <div class="quizGrid2">
            <div class="quizHeader2 d-flex justify-content-center">
              Your Answers:
            </div>
            <div class="quizSecondaryHeader2">
              <ol>
                {(this.state.quizAnswers).map(answer => (
                  <li key={answer}>{answer}</li>
                ))}
              </ol>
            </div>
            <button class="quizStartButton2" onClick={this.formView.bind(this)}>
              Email Me
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Quiz;
