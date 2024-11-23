import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="search-outline" size={26} color="#000000" />
        <Text style={styles.headerTitle}>Discover</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image 
            source={{ uri: 'https://pbs.twimg.com/profile_images/1306319460152864768/DYSTA0df_400x400.jpg' }} // Replace with your profile image URL
            style={styles.profileImage} 
          />
        </TouchableOpacity>
      </View>
      
      <ScrollView>
      <View style={styles.featuredContainer}>
  <Swiper 
    style={styles.wrapper} 
    showsButtons={true} 
    autoplay={true} // Enable autoplay
    autoplayTimeout={3} // Time in seconds for each slide
  >
    <View style={styles.slide}>
      <Image 
        source={{ uri: 'https://sportshub.cbsistatic.com/i/2024/04/29/7e3124c1-8837-4900-a22d-0a06b2efe730/one-piece-chapter-1113-cover-art-eiichiro-oda-manga.jpg' }} // Replace with your featured image URL
        style={styles.featuredImage} 
      />
    </View>
    <View style={styles.slide}>
      <Image 
        source={{ uri: 'https://sportshub.cbsistatic.com/i/2024/01/07/614cfc33-1ba5-44df-9a85-c1cb2d7f1e00/one-piece-chapter-1103-cover-art-2024-eiichiro-oda.jpg' }} // Replace with your second image URL
        style={styles.featuredImage} 
      />
    </View>
    <View style={styles.slide}>
      <Image 
        source={{ uri: 'https://sportshub.cbsistatic.com/i/2023/10/08/7b6ac4a7-1347-4615-a3f6-98e867f873f0/one-piece-1094-zoro-eiichiro-oda-art.jpg' }} // Replace with your third image URL
        style={styles.featuredImage} 
      />
    </View>
  </Swiper>
</View>

        <Text style={styles.recentTitle}>Recently Added Episodes</Text>

        <View style={styles.episodeContainer}>
          <View style={styles.episodeCard}>
            <Image 
              source={{ uri: 'https://lrmonline.com/wp-content/uploads/2020/09/one-piece-episode-of-east-blue-9125-1-1024x576.jpg' }} // Replace with your episode image URL
              style={styles.episodeImage} 
            />
            <Text style={styles.episodeText}>One Piece East Blue</Text>
            <Text style={styles.episodeInfo}>SS 1 | Episode 1-61</Text>
          </View>

          <View style={styles.episodeCard}>
            <Image 
              source={{ uri: 'https://i.redd.it/6l9rdrpgbtn61.jpg' }} // Replace with your episode image URL
              style={styles.episodeImage} 
            />
            <Text style={styles.episodeText}>One Piece Entering into the Grand Line</Text>
            <Text style={styles.episodeInfo}>SS 2 | Episode 1-16</Text>
          </View>
          <View style={styles.episodeCard}>
            <Image 
              source={{ uri: 'https://static.wikia.nocookie.net/onepiece/images/7/77/Movie_3_Poster.png/revision/latest/smart/width/386/height/259?cb=20221110140339' }} // Replace with your episode image URL
              style={styles.episodeImage} 
            />
            <Text style={styles.episodeText}>One Piece the Winter Island</Text>
            <Text style={styles.episodeInfo}>SS 3 | Episode 1-15</Text>
          </View>
          <View style={styles.episodeCard}>
            <Image 
              source={{ uri: 'https://i.pinimg.com/originals/9d/e0/34/9de034bd03feb13f6c6a01045537b58e.jpg' }} // Replace with your episode image URL
              style={styles.episodeImage} 
            />
            <Text style={styles.episodeText}>One Piece Fighting in Alabasta</Text>
            <Text style={styles.episodeInfo}>SS 4 | Episode 1-38</Text>
          </View>
          <View style={styles.episodeCard}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvKGhr8h6qemAdnOfEZW2I2_lSYqHZQRcGC8yOX40do6FTHTlJsDkpmDO0-U1Ie419c_g&usqp=CAU' }} // Replace with your episode image URL
              style={styles.episodeImage} 
            />
            <Text style={styles.episodeText}>One Piece he Zenny Pirate Crew Sortie!</Text>
            <Text style={styles.episodeInfo}>SS 5 | Episode 1-13</Text>
          </View>
          <View style={styles.episodeCard}>
            <Image 
              source={{ uri: 'https://static.wikia.nocookie.net/onepiece/images/8/83/Episode_of_Skypiea.png/revision/latest/smart/width/250/height/250?cb=20180519020955' }} // Replace with your episode image URL
              style={styles.episodeImage} 
            />
            <Text style={styles.episodeText}>One Piece Sky Island ~ Skypiea</Text>
            <Text style={styles.episodeInfo}>SS 6 | Episode 1-52</Text>
          </View>
          <View style={styles.episodeCard}>
            <Image 
              source={{ uri: 'https://static.wikia.nocookie.net/onepiece/images/3/33/Long_Ring_Long_Land_Arc.png/revision/latest?cb=20230323222528' }} // Replace with your episode image URL
              style={styles.episodeImage} 
            />
            <Text style={styles.episodeText}>One Piece The Foxy Pirate Crew</Text>
            <Text style={styles.episodeInfo}>SS 7 | Episode 1-33</Text>
          </View>
          <View style={styles.episodeCard}>
            <Image 
              source={{ uri: 'https://i1.sndcdn.com/artworks-000122082374-ibr6u7-t500x500.jpg' }} // Replace with your episode image URL
              style={styles.episodeImage} 
            />
            <Text style={styles.episodeText}>One Piece Water Seven</Text>
            <Text style={styles.episodeInfo}>SS 8 | Episode 1-35</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D53633', // Change background to white
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 20
  },
  headerTitle: {
    fontSize: 24,
    color: '#000000', // Change text color to black
    fontWeight: 'bold',
    marginLeft: 20
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  featuredContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  wrapper: {
    height: 200, // Set height for the swiper
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  recentTitle: {
    fontSize: 20,
    color: '#000000', // Change text color to black
    marginBottom: 10,
    fontWeight: 'bold',
  },
  episodeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  episodeCard: {
    width: '48%',
    backgroundColor: '#f0f0f0', // Light background for episode cards
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  episodeImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  episodeText: {
    color: '#000000', // Change text color to black
    fontSize: 16,
    fontWeight: 'bold',
  },
  episodeInfo: {
    color: '#888888',
    fontSize: 14,
  },
});