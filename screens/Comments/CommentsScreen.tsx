/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Flex } from '@ant-design/react-native';
import { useStyleSheet } from '@ui-kitten/components';
import { RootStackScreenProps } from '../../types';

type Props = RootStackScreenProps<'CommentsScreen'>;

export default function CommentsScreen({ navigation }: Props) {
  const styles = useStyleSheet(themedStyles);
  //   const theme = useTheme();

  return (
    <View>
      <View style={styles.topHeader}>
        <Flex>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../../assets/images/profile.jpg')}
              style={{
                width: 30,
                height: 30,
                maxWidth: 30,
                minHeight: 30,
                marginRight: 10,
                borderRadius: 30,
              }}
            />
          </View>
          <Flex direction="column" style={{ alignItems: 'flex-start' }}>
            <Text style={styles.captionBold}>@Melbourne Central</Text>
            <Text style={styles.caption}>Caption 123 456</Text>
          </Flex>
        </Flex>
      </View>
      <Flex style={styles.comment}>
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={{
            width: 30,
            height: 30,
            maxWidth: 30,
            minHeight: 30,
            marginRight: 10,
            borderRadius: 30,
          }}
        />
        <Flex direction="column" style={{ alignItems: 'flex-start' }}>
          <Text style={styles.captionBold}>joshsmith</Text>
          <Text style={styles.caption}>Caption 123 456</Text>
          <Text style={styles.time}>15/07/12 12:15pm</Text>
        </Flex>
      </Flex>
      <Flex style={styles.comment}>
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={{
            width: 30,
            height: 30,
            maxWidth: 30,
            minHeight: 30,
            marginRight: 10,
            borderRadius: 30,
          }}
        />
        <Flex direction="column" style={{ alignItems: 'flex-start' }}>
          <Text style={styles.captionBold}>joshsmith</Text>
          <Text style={styles.caption}>Caption 123 456</Text>
          <Text style={styles.time}>15/07/12 12:15pm</Text>
        </Flex>
      </Flex>
      <Flex style={styles.comment}>
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={{
            width: 30,
            height: 30,
            maxWidth: 30,
            minHeight: 30,
            marginRight: 10,
            borderRadius: 30,
          }}
        />
        <Flex direction="column" style={{ alignItems: 'flex-start' }}>
          <Text style={styles.captionBold}>joshsmith</Text>
          <Text style={styles.caption}>Caption 123 456</Text>
          <Text style={styles.time}>15/07/12 12:15pm</Text>
        </Flex>
      </Flex>
      <Flex style={styles.comment}>
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={{
            width: 30,
            height: 30,
            maxWidth: 30,
            minHeight: 30,
            marginRight: 10,
            borderRadius: 30,
          }}
        />
        <Flex direction="column" style={{ alignItems: 'flex-start' }}>
          <Text style={styles.captionBold}>joshsmith</Text>
          <Text style={styles.caption}>Caption 123 456</Text>
          <Text style={styles.time}>15/07/12 12:15pm</Text>
        </Flex>
      </Flex>
    </View>
  );
}

const themedStyles = StyleSheet.create({
  avatarContainer: {
    width: 30,
    height: 30,
    maxWidth: 30,
    minHeight: 30,
    marginRight: 10,
    borderRadius: 30,
  },
  topHeader: {
    padding: 10,
    borderBottomColor: 'text-secondary-color',
    borderWidth: 1.5,
  },
  comment: {
    padding: 10,
  },
  caption: {
    // fontWeight: '700',
    fontSize: 14,
    color: 'brand-white-color',
  },
  captionBold: {
    fontWeight: '700',
    fontSize: 14,
    color: 'brand-white-color',
  },
  time: {
    fontSize: 14,
    color: 'text-secondary-color',
  },
});
