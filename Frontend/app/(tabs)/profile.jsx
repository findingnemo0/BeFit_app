import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppSettingCard from '../../components/AppSettingCard'
import { Icons } from '../../assets/icons/icons'
import CTA from '../../components/CTA'
import ProfileCard from '../../components/ProfileCard'

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView
         showsVerticalScrollIndicator={false}
      >
        {/* Main Container  */}
        <View className="mx-5 gap-4 mt-3">

          {/* Profile Highlight Cards section */}
          <View className="flex-row flex-wrap justify-between gap-3 bg-red">
              <ProfileCard
                  title='Gender'
                  value='Male'
                  icon={Icons.gender.male}
                  // width={"48%"}
              />
              <ProfileCard
                  title='Gender'
                  value='Male'
                  icon={Icons.gender.male}
                  // width={"48%"}
              />
              <ProfileCard
                  title='Gender'
                  value='Male'
                  icon={Icons.gender.male}
                  // width={"48%"}
              />
              <ProfileCard
                  title='Gender'
                  value='Male'
                  icon={Icons.gender.male}
                  // width={"48%"}
              />
          </View>

          {/* CTA's section  */}
          <View className="flex-col gap-2">
            <CTA
              title='Fitness'
              navigateTo=''
            />
            <CTA
              title='Edit'
              isActive={true}
              navigateTo=''
            />
          </View>

          {/* App Setting section  */}
          <View className="flex-col gap-3">
            <Text className="font-Medium text-h2">
                App Setting
            </Text>

            {/* app setting content list  */}
            <View className="flex-col gap-3">
              <AppSettingCard
                title="Languages"
                icon={Icons.Language}
              />
              <AppSettingCard
                title="Notification setting"
                icon={Icons.notification.outlined}
              />
              <AppSettingCard
                title="Analytics"
                icon={Icons.Analytics}
              />
              <AppSettingCard
                title="Feedback"
                icon={Icons.Comment}
              />
              <AppSettingCard
                title="Support"
                icon={Icons.Contact}
              />
              <AppSettingCard
                title="Rate the app"
                icon={Icons.ThumbsUp}
              />
              <AppSettingCard
                title="Terms & Conditions"
                icon={Icons.Assignment}
              />
              <AppSettingCard
                title="Report"
                icon={Icons.Feedback}
              />
              <AppSettingCard
                title="Log out"
                icon={Icons.Logout}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile