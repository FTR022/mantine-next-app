'use client';

// import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './HeroImageBackground.module.css';

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title} ta="center" mt={100}>
          {/* MALI-HOUSE{' '} */}
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'pink', to: 'yellow' }}
          >
            MALI-HOUSE
            {/* L'immobilier autrement */}
          </Text>
        </Title>

        <Container size={640}>
          <Text size="xl" className={classes.description}>
            Votre projet de vie en toute confiance
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="xl">
            Construire
          </Button>
          <Button className={classes.control} variant="white" size="xl">
            Acheter
          </Button>
          <Button className={classes.control} variant="white" size="xl">
            Louer
          </Button>
        </div>
      </div>
    </div>
  );
}
