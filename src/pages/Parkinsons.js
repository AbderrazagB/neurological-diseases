import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Parkinsons = () => {
  return (
    <section id="parkinsons" className="disease-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-center mb-4">Parkinson's Disease</h1>
          <p className="text-center">
            Parkinson's is a progressive nervous system disorder that affects movement. 
            Symptoms start gradually, sometimes with a barely noticeable tremor in one hand, 
            and can lead to stiffness, slowing of movement, and balance problems.
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
              <Card className="mb-3 flex-fill">
                <Card.Body>
                  <Card.Title>Symptoms</Card.Title>
                  <Card.Text>
                    - Tremors, usually in hands or fingers<br />
                    - Muscle stiffness and rigidity<br />
                    - Slowed movement (bradykinesia)<br />
                    - Impaired balance and posture
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
              <Card className="mb-3 flex-fill">
                <Card.Body>
                  <Card.Title>Causes</Card.Title>
                  <Card.Text>
                    - Loss of dopamine-producing neurons<br />
                    - Genetic mutations and family history<br />
                    - Environmental factors and toxins<br />
                    - Aging and neurodegenerative processes
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
              <Card className="mb-3 flex-fill">
                <Card.Body>
                  <Card.Title>Treatment</Card.Title>
                  <Card.Text>
                    - Medications to manage symptoms<br />
                    - Physical and occupational therapy<br />
                    - Deep brain stimulation (DBS)<br />
                    - Healthy lifestyle and exercise
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Button
            variant="primary"
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1069024/"
            target="_blank"
          >
            Read More
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Parkinsons;
