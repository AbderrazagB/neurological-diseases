import React from 'react';
import DiseaseCard from '../components/DiseaseCard';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Container className="mt-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-center mb-4">Neurological Diseases Information</h1>
      </motion.div>
      <Row>
        <Col md={6} lg={3}>
          <DiseaseCard
            title="Multiple Sclerosis"
            description="Learn about MS, its symptoms, and treatments."
            link="/multiple-sclerosis"
          />
        </Col>
        <Col md={6} lg={3}>
          <DiseaseCard
            title="Stroke"
            description="Understand stroke causes, prevention, and recovery."
            link="/stroke"
          />
        </Col>
        <Col md={6} lg={3}>
          <DiseaseCard
            title="Alzheimer's"
            description="Explore Alzheimer's disease and its impact."
            link="/alzheimers"
          />
        </Col>
        <Col md={6} lg={3}>
          <DiseaseCard
            title="Parkinson's"
            description="Discover Parkinson's disease and management strategies."
            link="/parkinsons"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;