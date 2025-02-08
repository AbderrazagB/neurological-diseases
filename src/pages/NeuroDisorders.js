import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import BrainImage from '../assets/brain.avif';

const NeuroDisordersOverview = () => {
  return (
    <section id="neuro-disorders" className="disease-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-center mb-4">Neurological Disorders</h1>
          <p className="text-center">
            Neurological disorders affect the brain, spinal cord, and nerves, impacting various functions such as movement, cognition, and sensation.
          </p>
        </motion.div>

        <Row className="align-items-center mt-4">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={BrainImage}
                alt="Neurological Disorders"
                className="img-fluid rounded shadow-lg mb-2"
              />
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3>Understanding Neurological Disorders</h3>
              <p>
                These disorders can be caused by genetic factors, injuries, infections, or environmental influences. They can affect people differently, requiring various treatments and management approaches.
              </p>
              <Button
                variant="primary"
                href="https://my.clevelandclinic.org/health/diseases/neurological-disorders"
                target="_blank"
              >
                Learn More
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NeuroDisordersOverview;
