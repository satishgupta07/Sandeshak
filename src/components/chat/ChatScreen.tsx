import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Avatar from '../ui/Avatar';
import IconButton from '../ui/IconButton';
import SearchBar from '../ui/SearchBar';

type Conversation = {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  avatarColor: string;
};

const CONVERSATIONS: Conversation[] = [
  { id: '1', name: 'Alice Johnson',  lastMessage: 'See you tomorrow!',         time: '10:42 AM',  unread: 2, avatarColor: 'bg-violet-500'  },
  { id: '2', name: 'Bob Smith',      lastMessage: 'Can you send me the file?', time: '9:15 AM',   unread: 0, avatarColor: 'bg-emerald-500' },
  { id: '3', name: 'Family Group',   lastMessage: 'Mom: Dinner at 7pm',        time: 'Yesterday', unread: 5, avatarColor: 'bg-amber-500'   },
  { id: '4', name: 'Charlie Brown',  lastMessage: 'Sure, sounds good!',        time: 'Yesterday', unread: 0, avatarColor: 'bg-rose-500'    },
  { id: '5', name: 'Diana Prince',   lastMessage: 'Thanks for helping!',       time: 'Mon',       unread: 0, avatarColor: 'bg-cyan-500'    },
  { id: '6', name: 'Work Team',      lastMessage: 'You: Meeting at 3pm',       time: 'Mon',       unread: 0, avatarColor: 'bg-indigo-500'  },
  { id: '7', name: 'Eve Martinez',   lastMessage: "Haha that's funny 😂",      time: 'Sun',       unread: 1, avatarColor: 'bg-pink-500'    },
  { id: '8', name: 'Frank Ocean',    lastMessage: 'Let me check and get back', time: 'Sat',       unread: 0, avatarColor: 'bg-teal-500'    },
];

function ConversationItem({ item }: { item: Conversation }) {
  return (
    <TouchableOpacity className="flex-row items-center px-4 py-3 active:bg-slate-100">
      <Avatar name={item.name} colorClass={item.avatarColor} />
      <View className="flex-1 ml-3 border-b border-slate-100 pb-3">
        <View className="flex-row justify-between items-center mb-0.5">
          <Text className="text-slate-900 font-semibold text-base flex-1 mr-2" numberOfLines={1}>
            {item.name}
          </Text>
          <Text className={`text-xs ${item.unread > 0 ? 'text-indigo-600 font-semibold' : 'text-slate-400'}`}>
            {item.time}
          </Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-slate-500 text-sm flex-1 mr-2" numberOfLines={1}>
            {item.lastMessage}
          </Text>
          {item.unread > 0 && (
            <View className="bg-indigo-600 rounded-full min-w-5 h-5 items-center justify-center px-1">
              <Text className="text-white text-xs font-bold">{item.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

type Props = { onLogout: () => void };

export default function ChatScreen({ onLogout }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pt-2 pb-3">
        <Text className="text-2xl font-bold text-slate-900">Chats</Text>
        <View className="flex-row gap-3 items-center">
          <IconButton variant="muted" onPress={onLogout}>
            <Text className="text-slate-600 text-xs font-medium">Out</Text>
          </IconButton>
          <IconButton variant="primary">
            <Text className="text-white text-xl leading-none">+</Text>
          </IconButton>
        </View>
      </View>

      {/* Search bar */}
      <View className="mx-4 mb-3">
        <SearchBar />
      </View>

      {/* Conversation list */}
      <FlatList
        data={CONVERSATIONS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ConversationItem item={item} />}
        showsVerticalScrollIndicator={false}
      />

      {/* Floating compose button */}
      <TouchableOpacity className="absolute bottom-8 right-5 bg-indigo-600 w-14 h-14 rounded-full items-center justify-center shadow-lg">
        <Text className="text-white text-2xl leading-none">&#x270E;</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
