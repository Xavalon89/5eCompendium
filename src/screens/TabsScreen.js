import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

import { Container, Header, Content, Tab, Tabs, ScrollableTab } from 'native-base';
import Tab1 from './ClassesScreen';
import Tab2 from './RacesScreen';
import Tab3 from './SpellsScreen';
import Tab4 from './EquipmentScreen';
import Tab5 from './MonstersScreen';

export default class TabsScrollableExample extends Component {
  render() {
    return (
      <Container>
        <Tabs
          tabBarPosition='top'
          renderTabBar={() =>
            <ScrollableTab
              underlineStyle={{ backgroundColor: 'grey', borderRadius: 5 }}
              style={{ borderWidth: 0, borderColor: 'black' }}
            />
          }
        >
          <Tab
            heading="Classes"
            tabStyle={styles.tab}
            activeTabStyle={styles.tab}
            textStyle={styles.text}
            activeTextStyle={styles.activeText}>
            <Tab1 navigation={this.props.navigation} />
          </Tab>
          <Tab
            heading="Races"
            tabStyle={styles.tab}
            activeTabStyle={styles.tab}
            textStyle={styles.text}
            activeTextStyle={styles.activeText}>
            <Tab2 navigation={this.props.navigation} />
          </Tab>
          <Tab
            heading="Spells"
            tabStyle={styles.tab}
            activeTabStyle={styles.tab}
            textStyle={styles.text}
            activeTextStyle={styles.activeText}>
            <Tab3 navigation={this.props.navigation} />
          </Tab>
          <Tab
            heading="Equipment"
            tabStyle={styles.tab}
            activeTabStyle={styles.tab}
            textStyle={styles.text}
            activeTextStyle={styles.activeText}>
            <Tab4 navigation={this.props.navigation} />
          </Tab>
          <Tab
            heading="Bestiary"
            tabStyle={styles.tab}
            activeTabStyle={styles.tab}
            textStyle={styles.text}
            activeTextStyle={styles.activeText}>
            <Tab5 navigation={this.props.navigation} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#cc0000',
  },
  text: {
    color: 'black',
    //fontWeight: 'bold',
  },
  activeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
