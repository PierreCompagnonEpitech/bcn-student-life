<template>
  <Header />
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div
      class="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20"
    >
      <div class="absolute inset-0 opacity-40"></div>

      <div class="relative max-w-6xl mx-auto px-6 text-center">
        <div
          class="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
        >
          <span>💡</span>
          <span>Insider Knowledge</span>
        </div>

        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Barcelona
          <span
            class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Survival Guide
          </span>
        </h1>

        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          The unwritten rules, cultural quirks, and insider secrets that will
          make you feel like a local (or at least help you avoid looking like a
          total tourist) 🇪🇸
        </p>

        <div class="flex flex-wrap justify-center gap-4 text-sm">
          <div
            class="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200"
          >
            <span class="text-gray-600"
              >📚 {{ tips.length }} Essential Tips</span
            >
          </div>
          <div
            class="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200"
          >
            <span class="text-gray-600">🎯 Survival Rate: 99.9%</span>
          </div>
          <div
            class="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200"
          >
            <span class="text-gray-600">⏱️ 5 min read</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Filter Tabs -->
    <div
      class="sticky top-20 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 py-4"
    >
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex flex-wrap justify-center gap-2">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="activeCategory = category.id"
            :class="
              activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            "
            class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2"
          >
            <span>{{ category.emoji }}</span>
            <span>{{ category.name }}</span>
            <span class="bg-white/20 text-xs px-2 py-0.5 rounded-full">
              {{ getTipsByCategory(category.id).length }}
            </span>
          </button>
        </div>
      </div>
    </div>

    <!-- Tips Grid -->
    <div class="max-w-6xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(tip, index) in filteredTips"
          :key="tip.id"
          class="group bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 overflow-hidden"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- Tip Header -->
          <div class="p-6 pb-4">
            <div class="flex items-start justify-between mb-4">
              <div
                class="text-4xl group-hover:scale-110 transition-transform duration-300"
              >
                {{ tip.emoji }}
              </div>
              <div class="flex items-center space-x-2">
                <span
                  :class="getDifficultyColor(tip.difficulty)"
                  class="px-2 py-1 rounded-full text-xs font-medium"
                >
                  {{ tip.difficulty }}
                </span>
                <span
                  :class="getImportanceColor(tip.importance)"
                  class="px-2 py-1 rounded-full text-xs font-medium"
                >
                  {{ tip.importance }}
                </span>
              </div>
            </div>

            <h3
              class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300"
            >
              {{ tip.title }}
            </h3>

            <p class="text-gray-600 leading-relaxed mb-4">
              {{ tip.description }}
            </p>
          </div>

          <!-- Pro Tip -->
          <div
            v-if="tip.proTip"
            class="mx-6 mb-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200"
          >
            <div class="flex items-start space-x-2">
              <span class="text-yellow-600 text-sm">💡</span>
              <div>
                <p class="text-sm font-medium text-yellow-800 mb-1">Pro Tip:</p>
                <p class="text-sm text-yellow-700">{{ tip.proTip }}</p>
              </div>
            </div>
          </div>

          <!-- Warning -->
          <div
            v-if="tip.warning"
            class="mx-6 mb-4 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200"
          >
            <div class="flex items-start space-x-2">
              <span class="text-red-600 text-sm">⚠️</span>
              <div>
                <p class="text-sm font-medium text-red-800 mb-1">Watch Out:</p>
                <p class="text-sm text-red-700">{{ tip.warning }}</p>
              </div>
            </div>
          </div>

          <!-- Tags -->
          <div class="px-6 pb-6">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in tip.tags"
                :key="tag"
                class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fun Stats Section -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-white mb-12">
          Barcelona by the Numbers 📊
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in funStats" :key="stat.label" class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2">
              {{ stat.value }}
            </div>
            <div class="text-blue-100 text-sm">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Emergency Contacts -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Emergency Contacts 🚨
          </h2>
          <p class="text-gray-600">
            Save these numbers - you never know when you'll need them!
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="contact in emergencyContacts"
            :key="contact.service"
            class="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
          >
            <div class="flex items-center space-x-4">
              <div class="text-3xl">{{ contact.emoji }}</div>
              <div class="flex-1">
                <h3 class="font-semibold text-gray-900">
                  {{ contact.service }}
                </h3>
                <p class="text-2xl font-bold text-blue-600">
                  {{ contact.number }}
                </p>
                <p class="text-sm text-gray-500">{{ contact.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, computed } from "vue";

const activeCategory = ref("culture");

const categories = [
  { id: "culture", name: "Culture", emoji: "🎭" },
  { id: "food", name: "Food & Drink", emoji: "🍷" },
  { id: "transport", name: "Transport", emoji: "🚇" },
  { id: "social", name: "Social Life", emoji: "🎉" },
  { id: "practical", name: "Practical", emoji: "🔧" },
  { id: "safety", name: "Safety", emoji: "🛡️" },
];

const tips = [
  {
    id: 1,
    category: "culture",
    emoji: "🗣️",
    title: "Spanish People Are LOUD",
    description:
      "Don't be alarmed if conversations sound like arguments, that's just normal volume! Spanish people are passionate and expressive.",
    proTip: "Join in! Being quiet might make you seem unfriendly.",
    difficulty: "Easy",
    importance: "High",
    tags: ["communication", "social", "first-impression"],
  },
  {
    id: 2,
    category: "culture",
    emoji: "😴",
    title: "Siesta is REAL",
    description:
      "Between 2-5 PM, many shops close. Don't plan important errands during this time, even banks and government offices shut down.",
    warning:
      "Pharmacies and some tourist areas stay open, but most local businesses close.",
    difficulty: "Easy",
    importance: "High",
    tags: ["schedule", "shopping", "planning"],
  },
  {
    id: 3,
    category: "food",
    emoji: "🍽️",
    title: "Dinner at 10 PM is Normal",
    description:
      "Restaurants don't open for dinner until 8 PM. Eating at 6 PM marks you as a tourist immediately.",
    proTip:
      "Have a late afternoon snack (merienda) to survive until dinner time.",
    difficulty: "Medium",
    importance: "Medium",
    tags: ["dining", "schedule", "culture"],
  },
  {
    id: 4,
    category: "transport",
    emoji: "🚇",
    title: "Metro Pickpockets are Ninjas",
    description:
      "They work in teams and are incredibly skilled. Keep your phone and wallet in front pockets, never in your backpack.",
    warning: "Tourist areas like Las Ramblas and Sagrada Familia are hotspots.",
    difficulty: "Hard",
    importance: "Critical",
    tags: ["safety", "metro", "pickpockets"],
  },
  {
    id: 5,
    category: "social",
    emoji: "🍻",
    title: "Botellón Culture",
    description:
      "Pre-drinking in parks or beaches before going out is totally normal and legal (mostly). Buy drinks from supermarkets, not bars.",
    proTip: "Bring a speaker, snacks, and make friends, it's a social event!",
    difficulty: "Easy",
    importance: "Medium",
    tags: ["nightlife", "social", "budget"],
  },
  {
    id: 6,
    category: "practical",
    emoji: "💳",
    title: "Cash is Still King",
    description:
      "Many small bars, markets, and local shops only accept cash. Always carry some euros with you.",
    warning: "Some places have minimum card amounts (usually €10-20).",
    difficulty: "Easy",
    importance: "High",
    tags: ["money", "shopping", "practical"],
  },
  {
    id: 7,
    category: "culture",
    emoji: "👋",
    title: "Two Kisses, Always",
    description:
      "Greeting with two kisses (air kisses) is standard, even for people you just met. Start with the right cheek.",
    proTip: "When in doubt, follow the other person's lead.",
    difficulty: "Medium",
    importance: "Medium",
    tags: ["greetings", "social", "etiquette"],
  },
  {
    id: 8,
    category: "food",
    emoji: "🥘",
    title: "Paella is NOT from Barcelona",
    description:
      "It's from Valencia! Locals might judge you for ordering it. Try \"fideuà\" instead, it's the Catalan version with noodles.",
    warning:
      "Never, EVER ask for paella with chorizo. That's culinary blasphemy.",
    difficulty: "Easy",
    importance: "Medium",
    tags: ["food", "culture", "local-knowledge"],
  },
  {
    id: 9,
    category: "transport",
    emoji: "🛵",
    title: "Motorbikes Own the Streets",
    description:
      "They drive on sidewalks, between cars, and appear out of nowhere. Always look both ways, even on pedestrian streets.",
    warning: "They have right of way in bike lanes, don't walk there!",
    difficulty: "Medium",
    importance: "High",
    tags: ["traffic", "safety", "pedestrian"],
  },
  {
    id: 10,
    category: "practical",
    emoji: "🏠",
    title: "Apartment Hunting is War",
    description:
      "Good apartments disappear in hours. Come prepared with all documents, first month + deposit + agency fee in cash.",
    proTip:
      "Use Idealista, Fotocasa, and join Facebook groups for international students.",
    difficulty: "Hard",
    importance: "Critical",
    tags: ["housing", "documents", "money"],
  },
  {
    id: 11,
    category: "culture",
    emoji: "🗣️",
    title: "Catalan vs Spanish Drama",
    description:
      'Barcelona speaks Catalan first, Spanish second. Don\'t worry, everyone speaks Spanish, but learning "Bon dia" goes a long way.',
    proTip: 'Street signs are in Catalan. "Carrer" = Street, "Plaça" = Square.',
    difficulty: "Medium",
    importance: "Medium",
    tags: ["language", "culture", "respect"],
  },
  {
    id: 12,
    category: "social",
    emoji: "🌅",
    title: "Clubs Open at 1 AM",
    description:
      "Going to a club before midnight is like arriving to a party before the host. Pre-game properly!",
    proTip: "Check guest lists online for free entry before midnight.",
    difficulty: "Easy",
    importance: "Low",
    tags: ["nightlife", "clubs", "timing"],
  },
  {
    id: 13,
    category: "food",
    emoji: "☕",
    title: "Coffee Culture Shock",
    description:
      "Café con leche is breakfast only. Ordering it after lunch is weird. Cortado is acceptable anytime.",
    warning:
      'Make sure to always say "para llevar" if you want to order it "to-go".',
    difficulty: "Easy",
    importance: "Low",
    tags: ["coffee", "culture", "timing"],
  },
  {
    id: 14,
    category: "practical",
    emoji: "📱",
    title: 'WiFi Password is Always "12345678"',
    description:
      "Or some variation. Most cafés and restaurants have free WiFi, just ask for the password.",
    proTip: "Download offline maps before exploring, data can be expensive.",
    difficulty: "Easy",
    importance: "Medium",
    tags: ["internet", "practical", "budget"],
  },
  {
    id: 15,
    category: "safety",
    emoji: "🎒",
    title: "Backpack = Tourist Target",
    description:
      "Wear it in front in crowded areas, or better yet, use a crossbody bag. Pickpockets love easy backpack access.",
    warning: "Never put anything valuable in outer pockets.",
    difficulty: "Easy",
    importance: "High",
    tags: ["safety", "pickpockets", "tourist"],
  },
];

const funStats = [
  { value: "2-5 PM", label: "Siesta Hours" },
  { value: "10 PM", label: "Dinner Time" },
  { value: "2 Kisses", label: "Standard Greeting" },
  { value: "€20", label: "Min Card Payment" },
];

const emergencyContacts = [
  {
    service: "Emergency Services",
    number: "112",
    emoji: "🚨",
    description: "Police, Fire, Medical",
  },
  {
    service: "Local Police",
    number: "092",
    emoji: "👮",
    description: "Guardia Urbana",
  },
  {
    service: "National Police",
    number: "091",
    emoji: "🚔",
    description: "For serious crimes",
  },
  {
    service: "Medical Emergency",
    number: "061",
    emoji: "🏥",
    description: "Ambulance & Medical",
  },
];

const filteredTips = computed(() => {
  if (activeCategory.value === "all") {
    return tips;
  }
  return tips.filter((tip) => tip.category === activeCategory.value);
});

const getTipsByCategory = (categoryId) => {
  if (categoryId === "all") return tips;
  return tips.filter((tip) => tip.category === categoryId);
};

const getDifficultyColor = (difficulty) => {
  const colors = {
    Easy: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Hard: "bg-red-100 text-red-800",
  };
  return colors[difficulty] || "bg-gray-100 text-gray-800";
};

const getImportanceColor = (importance) => {
  const colors = {
    Low: "bg-gray-100 text-gray-800",
    Medium: "bg-blue-100 text-blue-800",
    High: "bg-orange-100 text-orange-800",
    Critical: "bg-red-100 text-red-800",
  };
  return colors[importance] || "bg-gray-100 text-gray-800";
};
</script>
