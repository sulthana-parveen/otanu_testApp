import { View, Text, Image, Dimensions, TouchableOpacity, FlatList, ScrollView, SafeAreaView, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { List } from 'react-native-paper'

const { height, width } = Dimensions.get('window')

const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalList, setModalList] = useState(false)
  const listArray = [
    {
      id: '1',
      image: ''
    },
    {
      id: '2',
      image: require('../images/starbucks.png')
    },
    {
      id: '3',
      image: require('../images/starbucks.png')
    },
    {
      id: '4',
      image: ''
    },
  ]
  const flatListArray = [
    {
      id: '1',
      image: require('../images/share.png'),
      title: 'Share Invite'
    },
    {
      id: '2',
      image: require('../images/copy.png'),
      title: 'Copy Link'
    },
    {
      id: '3',
      image: require('../images/email.png'),
      title: 'Email'
    },
    {
      id: '4',
      image: require('../images/others.png'),
      title: 'Others'
    },
  ]

  const ModalListArray = [
    {
      id: '1',
      image: require('../images/manage.png'),
      title: 'Manage Members'
    },
    {
      id: '2',
      image: require('../images/edit.png'),
      title: 'Edit Orgnaisation'
    },
    {
      id: '3',
      image: require('../images/delete.png'),
      title: 'Delete Organisation'
    },

  ]

  const renderItemList = ({ item }) => {
    return (
      <View
        style={{
          marginLeft: width * 0.05,
          backgroundColor: '#D9D9D9',
          borderRadius: width * 0.07
        }}
      >

        <Image
          style={{
            height: height * 0.075,
            width: width * 0.155
          }}
          source={item.image} />
      </View>
    )
  }

  return (

    <ScrollView
      style={{
        flex: 1
      }}
    >
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >

        <Pressable
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.75)",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setModalVisible(false)}
        >

          <Pressable
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              paddingVertical: 10,
              paddingHorizontal: 15,
              width: width * 0.7,
              shadowColor: "#000",
              shadowOpacity: 0.2,
              shadowRadius: 6,
              elevation: 5,
            }}
            onPress={(e) => e.stopPropagation()} // 👈 prevents closing when tapping inside
          >
            <FlatList
              data={flatListArray}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 12,
                  }}
                  onPress={() => setModalVisible(false)}
                >
                  <Image
                    style={{
                      height: height * 0.03,
                      width: width * 0.065,
                      marginRight: 10,
                      resizeMode: "contain",
                    }}
                    source={item.image}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#333",
                    }}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </Pressable>
        </Pressable>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalList}
        onRequestClose={() => setModalList(false)}
      >

        <Pressable
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.75)",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setModalList(false)}
        >

          <Pressable
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              paddingVertical: 10,
              paddingHorizontal: 15,
              width: width * 0.7,
              shadowColor: "#000",
              shadowOpacity: 0.2,
              shadowRadius: 6,
              elevation: 5,
            }}
            onPress={(e) => e.stopPropagation()} // 👈 prevents closing when tapping inside
          >
            <FlatList
              data={ModalListArray}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 12,
                  }}
                  onPress={() => setModalList(false)}
                >
                  <Image
                    style={{
                      height: height * 0.03,
                      width: width * 0.065,
                      marginRight: 10,
                      resizeMode: "contain",
                    }}
                    source={item.image}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      color: item.title === "Delete Organisation" ? "red" : "#333",
                    }}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </Pressable>
        </Pressable>
      </Modal>
      <View
        style={{
          marginHorizontal: width * 0.05,
          marginVertical: height * 0.02
        }}
      >

        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              height: height * 0.058,
              width: width * 0.12
            }}
            source={require('../images/person.png')} />
          <Image
            style={{
              height: height * 0.03,
              width: width * 0.065,
              marginLeft: width * 0.03,
              marginTop: height * 0.015
            }}
            source={require('../images/Frame.png')} />
          <Text
            style={{
              fontSize: width * 0.055,
              fontWeight: '600',
              marginLeft: width * 0.026,
              marginTop: height * 0.01
            }}
          >Otanu</Text>
          <TouchableOpacity
          onPress={() => navigation.navigate('AddOrganisation')}
          
          >
            <Text
            style={{
              fontSize: width * 0.039,
              marginLeft: width * 0.06,
              marginTop: height * 0.016,
              color: '#33755c'
            }}
          >Create a organisation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setModalVisible(true)
            }>
            <Image
              style={{
                height: height * 0.035,
                width: width * 0.07,
                marginLeft: width * 0.02,
                marginTop: height * 0.012,
                marginRight: width * 0.03
              }}
              source={require('../images/button.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: width * 0.05,
          marginVertical: height * 0.01
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: '#E4FDAC',
            alignItems: 'center',
            height: height * 0.045,
            width: width * 0.35,
            borderRadius: width * 0.05,
            justifyContent: 'center'
          }}
        >
          <Text
            style={{
              alignSelf: 'center',
              fontSize: width * 0.037
            }}
          >All Organisation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{

            alignItems: 'center',
            height: height * 0.045,
            width: width * 0.35,
            borderRadius: width * 0.05,
            justifyContent: 'center'
          }}
        >
          <Text>My Organisation</Text>
        </TouchableOpacity>
      </View>


      <View>
        <FlatList
          data={listArray}
          horizontal={true}
          renderItem={renderItemList}
          contentContainerStyle={{
            marginHorizontal: width * 0.015,
            marginVertical: height * 0.01
          }}
        />
      </View>

      <View
        style={{
          marginHorizontal: width * 0.05,
          marginVertical: height * 0.02
        }}
      >
        <View
          style={{
            flexDirection: 'row',

          }}
        >
          <View>
            <Text
              style={{
                color: '#33755c',
                fontSize: width * 0.039,
                fontWeight: '600'
              }}
            >
              Doing Things
            </Text>
            <Text
              style={{
                color: '#A1A1A1',
                fontSize: width * 0.035
              }}
            >
              1678 Members
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              setModalList(true)
            }
            style={{
              backgroundColor: '#D9D9D9',
              marginLeft: width * 0.035,
              height: height * 0.04,
              width: width * 0.082,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: width * 0.05
            }}
          >
            <Image
              style={{
                height: height * 0.02,
                width: width * 0.04
              }}
              source={require('../images/Group.png')} />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: '#D9D9D9',
              marginLeft: width * 0.035,
              height: height * 0.04,
              width: width * 0.082,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: width * 0.05
            }}
          >
            <Image
              style={{
                height: height * 0.02,
                width: width * 0.04
              }}
              source={require('../images/search.png')} />
          </View>

        </View>
      </View>

      <View>
        <List.Section>
          <List.Accordion
            style={{
              backgroundColor: '#F1F1F1',
              marginHorizontal: width * 0.05,

            }}
            title='General'
            left={() => <Image
              style={{
                height: height * 0.03,
                width: width * 0.065,
                marginTop: height * 0.015,
                marginLeft: width * 0.03
              }}
              source={require('../images/Frame.png')} />}
            right={() =>
              <View
                style={{
                  backgroundColor: '#FF5858',
                  //marginLeft:width*0.035,
                  height: height * 0.037,
                  width: width * 0.076,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: width * 0.05
                }}
              >
                <Text
                  style={{
                    color: 'white'
                  }}
                >
                  2
                </Text>
              </View>
            }
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />

          </List.Accordion>
          <List.Accordion
            style={{
              backgroundColor: '#F1F1F1',
              marginHorizontal: width * 0.05,
              marginVertical: height * 0.03,
            }}
            title='Meeting'
            left={() => <Image
              style={{
                height: height * 0.03,
                width: width * 0.065,
                marginTop: height * 0.015,
                marginLeft: width * 0.03
              }}
              source={require('../images/Frame.png')} />}>


            <List.Item title='General Task 1' />
            <List.Item title='General Task 2' />
          </List.Accordion>
          <List.Accordion
            style={{
              backgroundColor: '#F1F1F1',
              marginHorizontal: width * 0.05,
              //arginVertical:height*0.03,
            }}
            title='Onboarding'
            left={() => <Image
              style={{
                height: height * 0.03,
                width: width * 0.065,
                marginTop: height * 0.015,
                marginLeft: width * 0.03
              }}
              source={require('../images/Frame.png')} />}>



          </List.Accordion>
          <List.Accordion
            style={{
              backgroundColor: '#F1F1F1',
              marginHorizontal: width * 0.05,
              marginVertical: height * 0.03,
            }}
            title='Tasks'
            left={() => <Image
              style={{
                height: height * 0.03,
                width: width * 0.065,
                marginTop: height * 0.015,
                marginLeft: width * 0.03
              }}
              source={require('../images/Frame.png')} />}
            right={() =>
              <View
                style={{
                  backgroundColor: '#FF5858',
                  //marginLeft:width*0.035,
                  height: height * 0.037,
                  width: width * 0.076,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: width * 0.05
                }}
              >
                <Text
                  style={{
                    color: 'white'
                  }}
                >
                  3
                </Text>
              </View>
            }
          >

            <List.Item title="Share your work " />
            <List.Item title="Self - promo " />
            <List.Item title="Feedbacks" />
          </List.Accordion>
          <List.Accordion
            style={{
              backgroundColor: '#F1F1F1',
              marginHorizontal: width * 0.05,
              //arginVertical:height*0.03,
            }}
            title='Resources'
            left={() => <Image
              style={{
                height: height * 0.03,
                width: width * 0.065,
                marginTop: height * 0.015,
                marginLeft: width * 0.03
              }}
              source={require('../images/Frame.png')} />}>



          </List.Accordion>
        </List.Section>
      </View>
      <View>
        <View
          style={{
            backgroundColor: '#33755c',
            height: height * 0.075,
            width: width * 0.35,
            borderRadius: width * 0.08,
            position: 'absolute',
            right: width * 0.06,
            bottom: height * -0.04,
            // justifyContent:'center',
            flexDirection: 'row',

          }}
        >
          <View
            style={{
              marginLeft: width * 0.03,
            }}
          >
            <Image
              style={{
                height: height * 0.025,
                width: width * 0.06,
                marginTop: height * 0.015,
                marginLeft: width * 0.03
              }}
              source={require('../images/logowhite.png')}
            />
            <Text
              style={{
                color: 'white',
                fontSize: width * 0.03,
                marginLeft: width * 0.02
              }}
            >
              Home
            </Text>
          </View>
          <View
            style={{
              marginLeft: width * 0.08,
              marginTop: height * 0.004
            }}
          >
            <View
              style={{
                backgroundColor: '#F1F1F1',
                //marginLeft:width*0.035,
                height: height * 0.027,
                width: width * 0.055,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: width * 0.05,
                marginTop: height * 0.009,
              }}
            ></View>
            <Text
              style={{
                color: 'white',
                fontSize: width * 0.03,
                //arginLeft:width*0.02
              }}
            >
              You
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>

  )
}

export default Home