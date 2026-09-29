import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Tab = 'Home' | 'Classes' | 'Tasks' | 'Settings';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState<Tab>('Home');

  const renderContent = () => {
    if (activeTab === 'Classes') {
      return <ClassesScreen />;
    }

    if (activeTab === 'Tasks') {
      return <TasksScreen />;
    }

    if (activeTab === 'Settings') {
      return <SettingsScreen />;
    }

    return <HomeContent />;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {renderContent()}
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setActiveTab('Home')}
          >
            <Text
              style={[
                styles.navIcon,
                activeTab === 'Home' && styles.activeIcon,
              ]}
            >
              ⌂
            </Text>
            <Text
              style={[
                styles.navText,
                activeTab === 'Home' && styles.activeNavText,
              ]}
            >
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setActiveTab('Classes')}
          >
            <Text
              style={[
                styles.navIcon,
                activeTab === 'Classes' && styles.activeIcon,
              ]}
            >
              ▣
            </Text>
            <Text
              style={[
                styles.navText,
                activeTab === 'Classes' && styles.activeNavText,
              ]}
            >
              Classes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setActiveTab('Tasks')}
          >
            <Text
              style={[
                styles.navIcon,
                activeTab === 'Tasks' && styles.activeIcon,
              ]}
            >
              ✓
            </Text>
            <Text
              style={[
                styles.navText,
                activeTab === 'Tasks' && styles.activeNavText,
              ]}
            >
              Tasks
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setActiveTab('Settings')}
          >
            <Text
              style={[
                styles.navIcon,
                activeTab === 'Settings' && styles.activeIcon,
              ]}
            >
              ⚙
            </Text>
            <Text
              style={[
                styles.navText,
                activeTab === 'Settings' && styles.activeNavText,
              ]}
            >
              Settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

/* =========================
   HOME
========================= */

function HomeContent() {
  return (
    <>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning 👋</Text>
          <Text style={styles.name}>Jean Cometa</Text>
          <Text style={styles.course}>BS Computer Science • 3B</Text>
        </View>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JC</Text>
        </View>
      </View>

      <View style={styles.welcomeCard}>
        <View style={styles.welcomeContent}>
          <Text style={styles.welcomeSmall}>STUDENT DASHBOARD</Text>

          <Text style={styles.welcomeTitle}>
            Keep learning,{'\n'}keep growing!
          </Text>

          <Text style={styles.welcomeDescription}>
            Stay organized and keep track of your school activities.
          </Text>

          <TouchableOpacity style={styles.scheduleButton}>
            <Text style={styles.scheduleText}>View Schedule</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.bookIcon}>📚</Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <Text style={styles.seeAll}>This Week</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <View style={styles.statIcon}>
            <Text>📚</Text>
          </View>
          <Text style={styles.statNumber}>6</Text>
          <Text style={styles.statLabel}>Subjects</Text>
        </View>

        <View style={styles.statCard}>
          <View style={styles.statIcon}>
            <Text>✓</Text>
          </View>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Tasks</Text>
        </View>

        <View style={styles.statCard}>
          <View style={styles.statIcon}>
            <Text>⭐</Text>
          </View>
          <Text style={styles.statNumber}>92%</Text>
          <Text style={styles.statLabel}>Progress</Text>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Today's Classes</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>

      <ClassCard
        icon="💻"
        title="Programming"
        time="08:00 AM - 10:00 AM"
        room="Room 204"
        live
      />

      <ClassCard
        icon="📱"
        title="Mobile Development"
        time="10:30 AM - 12:00 PM"
        room="Laboratory 1"
      />

      <ClassCard
        icon="🎨"
        title="Human Computer Interaction"
        time="01:00 PM - 03:00 PM"
        room="Room 105"
      />

      <Text style={styles.sectionTitle}>Recent Activities</Text>

      <ActivityCard
        title="React Native Activity"
        time="Completed today"
      />

      <ActivityCard
        title="Java Programming"
        time="Completed yesterday"
      />
    </>
  );
}

/* =========================
   CLASSES
========================= */

function ClassesScreen() {
  return (
    <>
      <Text style={styles.pageTitle}>My Classes</Text>
      <Text style={styles.pageSubtitle}>
        Your classes and schedules
      </Text>

      <View style={styles.todayCard}>
        <Text style={styles.todayLabel}>TODAY</Text>
        <Text style={styles.todayDate}>Monday, September 28</Text>
      </View>

      <ClassCard
        icon="💻"
        title="Programming"
        time="08:00 AM - 10:00 AM"
        room="Room 204"
        live
      />

      <ClassCard
        icon="📱"
        title="Mobile Development"
        time="10:30 AM - 12:00 PM"
        room="Laboratory 1"
      />

      <ClassCard
        icon="🎨"
        title="Human Computer Interaction"
        time="01:00 PM - 03:00 PM"
        room="Room 105"
      />

      <ClassCard
        icon="🗄️"
        title="Database Management"
        time="03:30 PM - 05:00 PM"
        room="Laboratory 2"
      />
    </>
  );
}

/* =========================
   TASKS
========================= */

function TasksScreen() {
  return (
    <>
      <Text style={styles.pageTitle}>My Tasks</Text>
      <Text style={styles.pageSubtitle}>
        Keep track of your school activities
      </Text>

      <View style={styles.taskSummary}>
        <View>
          <Text style={styles.taskNumber}>12</Text>
          <Text style={styles.taskLabel}>Total Tasks</Text>
        </View>

        <View>
          <Text style={styles.taskNumber}>8</Text>
          <Text style={styles.taskLabel}>Completed</Text>
        </View>

        <View>
          <Text style={styles.taskNumber}>4</Text>
          <Text style={styles.taskLabel}>Pending</Text>
        </View>
      </View>

      <TaskCard
        title="React Native UI Activity"
        subject="Mobile Development"
        completed
      />

      <TaskCard
        title="Java Programming Exercise"
        subject="Programming"
        completed
      />

      <TaskCard
        title="HCI Design Activity"
        subject="Human Computer Interaction"
      />

      <TaskCard
        title="Database Assignment"
        subject="Database Management"
      />
    </>
  );
}

/* =========================
   SETTINGS
========================= */

function SettingsScreen() {
  return (
    <>
      <Text style={styles.pageTitle}>Settings</Text>
      <Text style={styles.pageSubtitle}>
        Manage your student dashboard
      </Text>

      <View style={styles.profileCard}>
        <View style={styles.largeAvatar}>
          <Text style={styles.largeAvatarText}>JC</Text>
        </View>

        <View>
          <Text style={styles.profileName}>Jean Cometa</Text>
          <Text style={styles.profileCourse}>
            BS Computer Science • 3B
          </Text>
        </View>
      </View>

      <SettingItem icon="👤" title="Account" subtitle="Personal information" />
      <SettingItem icon="🔔" title="Notifications" subtitle="Manage notifications" />
      <SettingItem icon="🌙" title="Appearance" subtitle="Light mode" />
      <SettingItem icon="🔒" title="Privacy" subtitle="Privacy settings" />
      <SettingItem icon="ℹ️" title="About" subtitle="App information" />
    </>
  );
}

/* =========================
   COMPONENTS
========================= */

function ClassCard({
  icon,
  title,
  time,
  room,
  live = false,
}: {
  icon: string;
  title: string;
  time: string;
  room: string;
  live?: boolean;
}) {
  return (
    <View style={styles.classCard}>
      <View style={styles.classIcon}>
        <Text>{icon}</Text>
      </View>

      <View style={styles.classDetails}>
        <Text style={styles.classTitle}>{title}</Text>
        <Text style={styles.classTime}>{time}</Text>
        <Text style={styles.classRoom}>{room}</Text>
      </View>

      {live && (
        <View style={styles.liveBadge}>
          <Text style={styles.liveText}>NOW</Text>
        </View>
      )}
    </View>
  );
}

function ActivityCard({
  title,
  time,
}: {
  title: string;
  time: string;
}) {
  return (
    <View style={styles.activityCard}>
      <View style={styles.activityIcon}>
        <Text>✓</Text>
      </View>

      <View style={styles.activityDetails}>
        <Text style={styles.activityTitle}>{title}</Text>
        <Text style={styles.activityTime}>{time}</Text>
      </View>

      <Text style={styles.done}>Done</Text>
    </View>
  );
}

function TaskCard({
  title,
  subject,
  completed = false,
}: {
  title: string;
  subject: string;
  completed?: boolean;
}) {
  return (
    <View style={styles.taskCard}>
      <View
        style={[
          styles.taskCheck,
          completed && styles.taskCompleted,
        ]}
      >
        <Text>{completed ? '✓' : ''}</Text>
      </View>

      <View style={styles.taskDetails}>
        <Text style={styles.taskTitle}>{title}</Text>
        <Text style={styles.taskSubject}>{subject}</Text>
      </View>

      <Text
        style={[
          styles.taskStatus,
          completed && styles.completedStatus,
        ]}
      >
        {completed ? 'Done' : 'Pending'}
      </Text>
    </View>
  );
}

function SettingItem({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <TouchableOpacity style={styles.settingItem}>
      <View style={styles.settingIcon}>
        <Text>{icon}</Text>
      </View>

      <View style={styles.settingDetails}>
        <Text style={styles.settingTitle}>{title}</Text>
        <Text style={styles.settingSubtitle}>{subtitle}</Text>
      </View>

      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

/* =========================
   STYLES
========================= */

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F4FA',
  },

  mainContainer: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 25,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },

  greeting: {
    fontSize: 13,
    color: '#817889',
    marginBottom: 4,
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#29232F',
  },

  course: {
    fontSize: 12,
    color: '#8C8192',
    marginTop: 4,
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#6B3FA0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  welcomeCard: {
    minHeight: 190,
    borderRadius: 24,
    backgroundColor: '#6B3FA0',
    padding: 22,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  welcomeContent: {
    flex: 1,
  },

  welcomeSmall: {
    color: '#DCC8EB',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },

  welcomeTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 31,
    marginTop: 8,
  },

  welcomeDescription: {
    color: '#E9DFF0',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 8,
    maxWidth: 220,
  },

  bookIcon: {
    fontSize: 60,
    position: 'absolute',
    right: 12,
    bottom: 8,
    opacity: 0.35,
  },

  scheduleButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginTop: 15,
  },

  scheduleText: {
    color: '#6B3FA0',
    fontSize: 12,
    fontWeight: 'bold',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#29232F',
    marginTop: 25,
    marginBottom: 13,
  },

  seeAll: {
    fontSize: 12,
    color: '#6B3FA0',
    fontWeight: 'bold',
  },

  statsContainer: {
    flexDirection: 'row',
    gap: 10,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
  },

  statIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#F0E8F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6B3FA0',
  },

  statLabel: {
    fontSize: 11,
    color: '#817889',
    marginTop: 3,
  },

  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#29232F',
    marginTop: 10,
  },

  pageSubtitle: {
    fontSize: 13,
    color: '#817889',
    marginTop: 5,
    marginBottom: 25,
  },

  todayCard: {
    backgroundColor: '#6B3FA0',
    borderRadius: 18,
    padding: 20,
    marginBottom: 18,
  },

  todayLabel: {
    color: '#DCC8EB',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  todayDate: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 6,
  },

  classCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  classIcon: {
    width: 48,
    height: 48,
    borderRadius: 13,
    backgroundColor: '#F0E8F5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  classDetails: {
    flex: 1,
    marginLeft: 13,
  },

  classTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#29232F',
  },

  classTime: {
    fontSize: 11,
    color: '#817889',
    marginTop: 4,
  },

  classRoom: {
    fontSize: 10,
    color: '#A08CA9',
    marginTop: 2,
  },

  liveBadge: {
    backgroundColor: '#E9F6ED',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 7,
  },

  liveText: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#438452',
  },

  activityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E9F6ED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  activityDetails: {
    flex: 1,
    marginLeft: 12,
  },

  activityTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#29232F',
  },

  activityTime: {
    fontSize: 10,
    color: '#8C8192',
    marginTop: 3,
  },

  done: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#438452',
  },

  taskSummary: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  taskNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6B3FA0',
    textAlign: 'center',
  },

  taskLabel: {
    fontSize: 10,
    color: '#817889',
    marginTop: 4,
    textAlign: 'center',
  },

  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  taskCheck: {
    width: 35,
    height: 35,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#D7CBDD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  taskCompleted: {
    backgroundColor: '#E9F6ED',
    borderColor: '#70A77D',
  },

  taskDetails: {
    flex: 1,
    marginLeft: 12,
  },

  taskTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#29232F',
  },

  taskSubject: {
    fontSize: 10,
    color: '#817889',
    marginTop: 4,
  },

  taskStatus: {
    fontSize: 10,
    color: '#B17B43',
    fontWeight: 'bold',
  },

  completedStatus: {
    color: '#438452',
  },

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  largeAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6B3FA0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  largeAvatarText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#29232F',
    marginLeft: 14,
  },

  profileCourse: {
    fontSize: 11,
    color: '#817889',
    marginLeft: 14,
    marginTop: 4,
  },

  settingItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  settingIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#F0E8F5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  settingDetails: {
    flex: 1,
    marginLeft: 12,
  },

  settingTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#29232F',
  },

  settingSubtitle: {
    fontSize: 10,
    color: '#817889',
    marginTop: 3,
  },

  arrow: {
    fontSize: 25,
    color: '#A79BAE',
  },

  bottomNav: {
    height: 70,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#ECE8EE',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60,
  },

  navIcon: {
    fontSize: 20,
    color: '#958B9B',
    marginBottom: 3,
  },

  activeIcon: {
    fontSize: 21,
    color: '#6B3FA0',
    marginBottom: 3,
  },

  navText: {
    fontSize: 10,
    color: '#958B9B',
  },

  activeNavText: {
    fontSize: 10,
    color: '#6B3FA0',
    fontWeight: 'bold',
  },
});