/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable global-require */
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Flex } from '@ant-design/react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useStyleSheet, useTheme } from '@ui-kitten/components';
// import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList, RootTabScreenProps } from '../types';

type NavigationProps = StackNavigationProp<RootStackParamList>;

export default function HomeScreen(props: RootTabScreenProps<'Home'>) {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const navigation = useNavigation<NavigationProps>();
  const info = [
    {
      name: 'brandonvincent',
      date: '15/08/12 - 08:03am',
      pics: [
        require('../assets/images/image_example.jpg'),
        require('../assets/images/img2.jpg'),
        require('../assets/images/img3.jpg'),
        require('../assets/images/img4.jpg'),
      ],
      caption: 'Caption 123 456',
      location: '@Melbourne Central',
    },
    {
      name: 'brandonvincent',
      date: '15/08/12 - 08:03am',
      pics: [require('../assets/images/img2.jpg')],
      caption: 'Caption 123 456',
      location: '@Melbourne Central',
    },
    {
      name: 'brandonvincent',
      date: '15/08/12 - 08:03am',
      pics: [require('../assets/images/img3.jpg')],
      caption: 'Caption 123 456',
      location: '@Melbourne Central',
    },
    {
      name: 'brandonvincent',
      date: '15/08/12 - 08:03am',
      pics: [require('../assets/images/img4.jpg')],
      caption: 'Caption 123 456',
      location: '@Melbourne Central',
    },
  ];

  // const renderImages = (item: ImageSourcePropType, index: number) => (
  //   <Image
  //     key={index}
  //     source={item}
  //     style={{ flex: 1, width: '100%', borderRadius: 12, marginVertical: 10 }}
  //   />
  // );

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1, width: '100%', backgroundColor: theme['black-background'] }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Flex style={styles.flexContainer}>
          {info.map((currentPost, index) => (
            <Flex style={styles.element} key={index}>
              <Flex>
                <View style={styles.avatarContainer}>
                  <Image
                    source={require('../assets/images/profile.jpg')}
                    style={{
                      borderRadius: 30,
                      height: 30,
                      marginRight: 5,
                      maxWidth: 30,
                      minHeight: 30,
                      width: 30,
                    }}
                  />
                </View>
                <Flex direction="column">
                  <Text style={styles.title}>{currentPost.name}</Text>
                  <Text style={styles.subtitle}>{currentPost.date}</Text>
                </Flex>
              </Flex>
              <Image
                source={currentPost.pics[0]}
                style={{
                  flex: 1,
                  width: '100%',
                  borderRadius: 12,
                  marginVertical: 10,
                }}
              />
              <Text style={styles.captionBold}>542 likes - {currentPost.location}</Text>
              <Text style={styles.caption}>{currentPost.caption}</Text>

              <TouchableOpacity onPress={() => navigation.navigate('CommentsScreen')}>
                <Text style={styles.subtitle}>View comments</Text>
              </TouchableOpacity>
            </Flex>
          ))}
        </Flex>
      </ScrollView>
    </View>
  );
}

const themedStyles = StyleSheet.create({
  avatarContainer: {
    borderRadius: 30,
    height: 30,
    marginRight: 5,
    maxWidth: 30,
    minHeight: 30,
    width: 30,
  },
  caption: {
    // fontWeight: '700',
    color: 'brand-white-color',
    fontSize: 14,
  },
  captionBold: {
    color: 'brand-white-color',
    fontSize: 14,
    fontWeight: '700',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'brand-white-color',
    flex: 1,
    justifyContent: 'center',
  },
  element: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    minHeight: 300,
    maxHeight: 500,
    marginBottom: 10,
  },
  flexContainer: {
    flexDirection: 'column',
    width: '100%',
    overflow: 'visible',
    padding: 20,
    backgroundColor: 'black-background',
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  subtitle: {
    fontSize: 14,
    color: 'text-secondary-color',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'brand-white-color',
  },
});
