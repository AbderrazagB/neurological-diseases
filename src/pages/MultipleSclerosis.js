import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const MultipleSclerosis = () => {
  return (
    <section id="multiple-sclerosis" className="disease-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-center mb-4">Multiple Sclerosis (MS)</h1>
          <p className="text-center">
            Multiple Sclerosis is a chronic autoimmune disease that affects the central nervous system. 
            It disrupts the flow of information within the brain and between the brain and body.
          </p>
        </motion.div>

        <Row className="mt-4">
          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Symptoms</Card.Title>
                  <Card.Text>
                    - Fatigue and weakness<br />
                    - Numbness or tingling in limbs<br />
                    - Vision problems<br />
                    - Difficulty with coordination and balance
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Causes</Card.Title>
                  <Card.Text>
                    - Immune system attacking myelin<br />
                    - Genetic and environmental factors<br />
                    - Infections triggering autoimmune response<br />
                    - Vitamin D deficiency
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Treatment</Card.Title>
                  <Card.Text>
                    - Disease-modifying therapies (DMTs)<br />
                    - Physical therapy and rehabilitation<br />
                    - Medications for symptom management<br />
                    - Lifestyle changes and healthy diet
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

export default MultipleSclerosis;
