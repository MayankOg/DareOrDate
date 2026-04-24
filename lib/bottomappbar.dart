import 'package:flutter/material.dart';
import 'home.dart';
import 'dod_dares_screen.dart';

class DodBottomNavShell extends StatefulWidget {
  const DodBottomNavShell({super.key});

  @override
  State<DodBottomNavShell> createState() => _DodBottomNavShellState();
}

class _DodBottomNavShellState extends State<DodBottomNavShell> {
  int _selectedIndex = 0;

  late final List<Widget> _screens = const [
    DodHomeScreen(),
    DodDaresScreen(),
    DodMatchesScreen(),
    DodChatScreen(),
    DodProfileScreen(),
  ];

  void _onDestinationSelected(int index) {
    setState(() => _selectedIndex = index);
  }

  @override
  Widget build(BuildContext context) {
    const bg = Color(0xFF0D0C0F);
    const navBg = Color(0xFF16131C);
    const coral = Color(0xFFFF4D6D);
    const textMuted = Color(0xFF8A8498);

    return Scaffold(
      backgroundColor: bg,
      body: IndexedStack(
        index: _selectedIndex,
        children: _screens,
      ),
      bottomNavigationBar: SafeArea(
        top: false,
        minimum: const EdgeInsets.fromLTRB(16, 0, 16, 12),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(28),
          child: NavigationBar(
            selectedIndex: _selectedIndex,
            onDestinationSelected: _onDestinationSelected,
            backgroundColor: navBg,
            indicatorColor: coral.withOpacity(0.18),
            surfaceTintColor: Colors.transparent,
            shadowColor: Colors.black54,
            labelBehavior:
            NavigationDestinationLabelBehavior.alwaysShow,
            destinations: const [
              NavigationDestination(
                icon: Icon(Icons.home_outlined),
                selectedIcon: Icon(Icons.home_rounded),
                label: 'Home',
              ),
              NavigationDestination(
                icon: Icon(Icons.local_fire_department_outlined),
                selectedIcon: Icon(Icons.local_fire_department_rounded),
                label: 'Dares',
              ),
              NavigationDestination(
                icon: Icon(Icons.favorite_border_rounded),
                selectedIcon: Icon(Icons.favorite_rounded),
                label: 'Matches',
              ),
              NavigationDestination(
                icon: Icon(Icons.chat_bubble_outline_rounded),
                selectedIcon: Icon(Icons.chat_bubble_rounded),
                label: 'Chat',
              ),
              NavigationDestination(
                icon: Icon(Icons.person_outline_rounded),
                selectedIcon: Icon(Icons.person_rounded),
                label: 'Profile',
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _DodPlaceholderScaffold extends StatelessWidget {
  const _DodPlaceholderScaffold({
    required this.title,
    required this.icon,
    required this.accent,
    required this.subtitle,
  });

  final String title;
  final IconData icon;
  final Color accent;
  final String subtitle;

  @override
  Widget build(BuildContext context) {
    const bg = Color(0xFF0D0C0F);
    const card = Color(0xFF17141E);
    const border = Color(0xFF2A2733);
    const text = Color(0xFFF0EEF5);
    const textMuted = Color(0xFF8A8498);

    return Scaffold(
      backgroundColor: bg,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 8),
              Container(
                width: 64,
                height: 64,
                decoration: BoxDecoration(
                  color: accent.withOpacity(0.18),
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: border),
                ),
                child: Icon(icon, color: accent, size: 30),
              ),
              const SizedBox(height: 20),
              Text(
                title,
                style: const TextStyle(
                  color: text,
                  fontSize: 30,
                  fontWeight: FontWeight.w800,
                  letterSpacing: -0.8,
                ),
              ),
              const SizedBox(height: 8),
              Text(
                subtitle,
                style: const TextStyle(
                  color: textMuted,
                  fontSize: 15,
                  height: 1.5,
                ),
              ),
              const SizedBox(height: 28),
              Expanded(
                child: Container(
                  width: double.infinity,
                  decoration: BoxDecoration(
                    color: card,
                    borderRadius: BorderRadius.circular(28),
                    border: Border.all(color: border),
                  ),
                  child: Center(
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(icon, color: accent, size: 42),
                        const SizedBox(height: 14),
                        Text(
                          '$title Screen',
                          style: const TextStyle(
                            color: text,
                            fontSize: 22,
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                        const SizedBox(height: 8),
                        const Text(
                          'Placeholder for upcoming UI implementation',
                          style: TextStyle(
                            color: textMuted,
                            fontSize: 14,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}


class DodMatchesScreen extends StatelessWidget {
  const DodMatchesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const _DodPlaceholderScaffold(
      title: 'Matches',
      icon: Icons.favorite_rounded,
      accent: Color(0xFFFFD60A),
      subtitle: 'See your latest matches and relationship momentum.',
    );
  }
}

class DodChatScreen extends StatelessWidget {
  const DodChatScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const _DodPlaceholderScaffold(
      title: 'Chat',
      icon: Icons.chat_bubble_rounded,
      accent: Color(0xFF5AC8FA),
      subtitle: 'Conversations, updates, and dare follow-ups live here.',
    );
  }
}

class DodProfileScreen extends StatelessWidget {
  const DodProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const _DodPlaceholderScaffold(
      title: 'Profile',
      icon: Icons.person_rounded,
      accent: Color(0xFF6FCF97),
      subtitle: 'Your profile, rewards, preferences, and verification tools.',
    );
  }
}