import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Stroke = () => {
  return (
    <section id="stroke" className="disease-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-center mb-4">Stroke (AVC)</h1>
          <p className="text-center">
            A stroke occurs when the blood supply to part of the brain is interrupted or reduced, 
            preventing brain tissue from getting oxygen and nutrients. It is a medical emergency 
            that requires immediate attention.
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
                    - Sudden numbness or weakness in face, arm, or leg<br />
                    - Confusion, trouble speaking or understanding speech<br />
                    - Difficulty walking, dizziness, loss of balance<br />
                    - Severe headache with no known cause
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
                    - Blocked artery (ischemic stroke)<br />
                    - Bursting of a blood vessel (hemorrhagic stroke)<br />
                    - High blood pressure and cholesterol<br />
                    - Smoking, diabetes, and heart disease
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
                    - Emergency clot-busting medications<br />
                    - Mechanical clot removal (thrombectomy)<br />
                    - Rehabilitation therapy (physical, speech, occupational)<br />
                    - Lifestyle changes to reduce risk factors
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Button
            variant="primary"
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1069025/"
            target="_blank"
          >
            Read More
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Stroke;
