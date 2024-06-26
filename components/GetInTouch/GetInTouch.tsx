'use client';

import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid } from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import bg from './bg.svg';
import classes from './GetInTouch.module.css';

export function GetInTouch() {
  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div className={classes.contacts} style={{ backgroundImage: `url(${bg.src})` }}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Contact information
          </Text>

          <ContactIconsList />
        </div>

        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
          <Text fz="lg" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label=" NOM " placeholder=" NOM" />
              <TextInput label=" Email" placeholder="hello@mali-house.fr" required />
            </SimpleGrid>

            <TextInput mt="md" label="Sujet" placeholder="Sujet" required />

            <Textarea mt="md" label="Message" placeholder="Ecrivez votre message" minRows={3} />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                ENVOYER
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
