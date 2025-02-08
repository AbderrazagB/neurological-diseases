import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Alzheimers = () => {
  return (
    <section id="alzheimers" className="disease-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-center mb-4">Alzheimer's Disease</h1>
          <p className="text-center">
            Alzheimer's is a progressive neurological disorder that causes brain cells to degenerate and die, 
            leading to memory loss, cognitive decline, and behavioral changes. It is the most common cause of dementia.
          </p>
        </motion.div>

        <Row className="mt-4">
  <Col md={4} className="d-flex">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-100"
    >
      <Card className="mb-3 h-100 d-flex flex-column">
        <Card.Body className="d-flex flex-column h-100">
          <Card.Title>Symptoms</Card.Title>
          <Card.Text className="flex-grow-1">
            - Memory loss affecting daily activities<br />
            - Difficulty solving problems<br />
            - Confusion with time and place<br />
            - Difficulty with words and conversations
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  </Col>

  <Col md={4} className="d-flex">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-100"
    >
      <Card className="mb-3 h-100 d-flex flex-column">
        <Card.Body className="d-flex flex-column h-100">
          <Card.Title>Causes</Card.Title>
          <Card.Text className="flex-grow-1">
            - Age and genetic factors<br />
            - Abnormal protein buildup in the brain<br />
            - Cardiovascular health issues<br />
            - Environmental and lifestyle factors
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  </Col>

  <Col md={4} className="d-flex">
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-100"
    >
      <Card className="mb-3 h-100 d-flex flex-column">
        <Card.Body className="d-flex flex-column h-100">
          <Card.Title>Treatment</Card.Title>
          <Card.Text className="flex-grow-1">
            - Medications to manage symptoms<br />
            - Cognitive therapy and mental exercises<br />
            - Lifestyle changes for brain health<br />
            - Support from caregivers and specialists
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  </Col>
</Row>

        <div className="text-center mt-4">
          <Button
            variant="primary"
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1069023/"
            target="_blank"
          >
            Read More
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Alzheimers;