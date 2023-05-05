import React, { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

class Feedback extends Component {
  // static defaultProps = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  //   total: 0,
  //   positivePercentage: 0,
  // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    Math.round((good * 100) / (good + neutral + bad));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleLeaveFeedback}
        ></FeedbackOptions>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={good + neutral + bad}
          positivePercentage={Math.round((good * 100) / (good + neutral + bad))}
        ></Statistics>
      </Section>
    );
  }
}

export default Feedback;
