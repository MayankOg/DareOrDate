import 'dart:async';
import 'package:flutter/material.dart';

class DodHomeScreen extends StatefulWidget {
  const DodHomeScreen({super.key});

  @override
  State<DodHomeScreen> createState() => _DodHomeScreenState();
}

class _DodHomeScreenState extends State<DodHomeScreen>
    with SingleTickerProviderStateMixin {
  late final Future<void> _loadFuture;
  late final AnimationController _shimmerController;

  final ProfileData _featuredProfile = const ProfileData(
    name: 'Sana',
    age: 24,
    distance: '3.2 km away',
    bio: 'Artist • Guitarist • Loves late coffee walks',
    tags: ['Playful', 'Bold', 'Verified'],
    recentDare: 'Recent Dare: 10-sec voice note',
  );

  final List<QuickActionData> _quickActions = const [
    QuickActionData(
      title: 'Discover',
      subtitle: 'Quick access',
      icon: Icons.explore_rounded,
      accent: Color(0xFFFF4D6D),
    ),
    QuickActionData(
      title: 'New Dare',
      subtitle: 'Quick access',
      icon: Icons.local_fire_department_rounded,
      accent: Color(0xFFBF5AF2),
    ),
    QuickActionData(
      title: 'Boost',
      subtitle: 'Quick access',
      icon: Icons.flash_on_rounded,
      accent: Color(0xFFFFD60A),
    ),
    QuickActionData(
      title: 'Safety',
      subtitle: 'Quick access',
      icon: Icons.shield_rounded,
      accent: Color(0xFF6FCF97),
    ),
  ];

  final List<DareCardData> _openDares = const [
    DareCardData(
      title: 'Send your best voice note',
      meta: '20 pts • 2h left • Flirty',
      badge: 'Dare',
    ),
    DareCardData(
      title: 'Make me laugh in 10 sec',
      meta: '15 pts • Nearby • Fun',
      badge: 'Dare',
    ),
    DareCardData(
      title: 'Coffee dare this weekend?',
      meta: '30 pts • Verified only',
      badge: 'Nearby',
    ),
  ];

  final List<ActivityCardData> _activities = const [
    ActivityCardData(
      title: 'Riya accepted your dare',
      subtitle: 'Submit proof before 10:30 PM',
      label: 'Now',
      icon: Icons.task_alt_rounded,
      accent: Color(0xFFFFD60A),
    ),
    ActivityCardData(
      title: '1 new match waiting',
      subtitle: 'Open chat and continue the spark',
      label: 'New',
      icon: Icons.favorite_rounded,
      accent: Color(0xFFFF4D6D),
    ),
  ];

  @override
  void initState() {
    super.initState();
    _loadFuture = Future<void>.delayed(const Duration(milliseconds: 200));
    _shimmerController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1200),
    )..repeat();
  }

  @override
  void dispose() {
    _shimmerController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    const bg = Color(0xFF0D0C0F);

    return Scaffold(
      backgroundColor: bg,
      body: FutureBuilder<void>(
        future: _loadFuture,
        builder: (context, snapshot) {
          final isLoading = snapshot.connectionState != ConnectionState.done;
          return Stack(
            children: [
              const _HomeBackground(),
              SafeArea(
                child: CustomScrollView(
                  physics: const BouncingScrollPhysics(),
                  slivers: [
                    SliverPadding(
                      padding: const EdgeInsets.fromLTRB(20, 16, 20, 24),
                      sliver: SliverList(
                        delegate: SliverChildListDelegate([
                          _buildTopBar(),
                          const SizedBox(height: 18),
                          if (isLoading)
                            _buildFeaturedProfileSkeleton()
                          else
                            _buildFeaturedProfileCard(_featuredProfile),
                          const SizedBox(height: 18),
                          if (isLoading)
                            _buildQuickActionsSkeleton()
                          else
                            _buildQuickActionsSection(),
                          const SizedBox(height: 24),
                          _buildSectionHeader('Open Dares', 'See all'),
                          const SizedBox(height: 12),
                          SizedBox(
                            height: 220,
                            child: isLoading
                                ? _buildOpenDaresSkeleton()
                                : _buildOpenDaresList(),
                          ),
                          const SizedBox(height: 24),
                          _buildSectionHeader('Keep Going', null),
                          const SizedBox(height: 12),
                          if (isLoading)
                            _buildActivitiesSkeleton()
                          else
                            _buildActivitiesList(),
                          const SizedBox(height: 22),
                          if (isLoading)
                            _buildSafetySkeleton()
                          else
                            _buildSafetyCard(),
                          const SizedBox(height: 24),
                        ]),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          );
        },
      ),
    );
  }

  Widget _buildTopBar() {
    return Row(
      children: [
        Container(
          width: 52,
          height: 52,
          decoration: BoxDecoration(
            color: const Color(0xFF23202C),
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: const Color(0xFF413C4E)),
          ),
          child: const Icon(Icons.person_rounded, color: Colors.white70),
        ),
        const SizedBox(width: 14),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text(
                'Hi, Aryan',
                style: TextStyle(
                  color: Color(0xFFF0EEF5),
                  fontSize: 24,
                  fontWeight: FontWeight.w800,
                  letterSpacing: -0.7,
                ),
              ),
              const SizedBox(height: 6),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                decoration: BoxDecoration(
                  color: const Color(0xFF23202C),
                  borderRadius: BorderRadius.circular(999),
                ),
                child: const Text(
                  'Verified mode',
                  style: TextStyle(
                    color: Color(0xFFFFD60A),
                    fontSize: 12,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
            ],
          ),
        ),
        _topIcon(Icons.notifications_none_rounded),
        const SizedBox(width: 10),
        _topIcon(Icons.tune_rounded),
      ],
    );
  }

  Widget _topIcon(IconData icon) {
    return Container(
      width: 42,
      height: 42,
      decoration: BoxDecoration(
        color: const Color(0xFF211E2A),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: const Color(0xFF383446)),
      ),
      child: Icon(icon, color: const Color(0xFFB2AEBE), size: 20),
    );
  }

  Widget _buildFeaturedProfileCard(ProfileData data) {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFF17141E),
        borderRadius: BorderRadius.circular(30),
        border: Border.all(color: const Color(0xFF2E2A39)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            height: 360,
            decoration: BoxDecoration(
              borderRadius: const BorderRadius.vertical(top: Radius.circular(30)),
              gradient: const LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [Color(0xFF4D435B), Color(0xFF6A5060), Color(0xFF855060)],
              ),
            ),
            child: Stack(
              children: [
                Positioned(
                  top: 18,
                  left: 18,
                  child: _chip(
                    data.distance,
                    bg: const Color(0xCC0D0C0F),
                    fg: Colors.white,
                  ),
                ),
                Positioned(
                  top: 18,
                  left: 128,
                  child: _chip(
                    'Verified',
                    bg: const Color(0xCC0D0C0F),
                    fg: const Color(0xFFFFD60A),
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 18, 20, 20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  '${data.name}, ${data.age}',
                  style: const TextStyle(
                    color: Color(0xFFF0EEF5),
                    fontSize: 28,
                    fontWeight: FontWeight.w800,
                    letterSpacing: -0.8,
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  data.bio,
                  style: const TextStyle(
                    color: Color(0xFF8A8498),
                    fontSize: 15,
                    height: 1.45,
                  ),
                ),
                const SizedBox(height: 16),
                Wrap(
                  spacing: 10,
                  runSpacing: 10,
                  children: data.tags.map(_buildTagChip).toList(),
                ),
                const SizedBox(height: 14),
                Container(
                  width: double.infinity,
                  padding:
                  const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                  decoration: BoxDecoration(
                    color: const Color(0xFF201C27),
                    borderRadius: BorderRadius.circular(18),
                  ),
                  child: Text(
                    data.recentDare,
                    style: const TextStyle(
                      color: Color(0xFFF0EEF5),
                      fontSize: 14,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
                const SizedBox(height: 18),
                Row(
                  children: [
                    Expanded(
                      child: _actionButton(
                        'Pass',
                        const Color(0xFF23202C),
                        const Color(0xFF8A8498),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: _actionButton(
                        'Like',
                        const Color(0xFF23202C),
                        const Color(0xFFF0EEF5),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      flex: 2,
                      child: _actionButton(
                        'Dare',
                        const Color(0xFFFF4D6D),
                        Colors.white,
                        isPrimary: true,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTagChip(String tag) {
    Color fg = const Color(0xFFF0EEF5);
    if (tag == 'Playful') fg = const Color(0xFFFF4D6D);
    if (tag == 'Bold') fg = const Color(0xFFBF5AF2);
    if (tag == 'Verified') fg = const Color(0xFFFFD60A);

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
      decoration: BoxDecoration(
        color: const Color(0xFF23202C),
        borderRadius: BorderRadius.circular(16),
      ),
      child: Text(
        tag,
        style: TextStyle(
          color: fg,
          fontSize: 13,
          fontWeight: FontWeight.w600,
        ),
      ),
    );
  }

  Widget _actionButton(String label, Color bg, Color fg,
      {bool isPrimary = false}) {
    return Container(
      height: 50,
      decoration: BoxDecoration(
        color: bg,
        borderRadius: BorderRadius.circular(18),
        boxShadow: isPrimary
            ? [
          BoxShadow(
            color: const Color(0xFFFF4D6D).withOpacity(0.24),
            blurRadius: 18,
            spreadRadius: 1,
          ),
        ]
            : null,
      ),
      child: Center(
        child: Text(
          label,
          style: TextStyle(
            color: fg,
            fontSize: 15,
            fontWeight: FontWeight.w700,
          ),
        ),
      ),
    );
  }

  Widget _buildQuickActionsSection() {
    return GridView.builder(
      itemCount: _quickActions.length,
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 4,
        crossAxisSpacing: 12,
        mainAxisSpacing: 12,
        childAspectRatio: 0.72,
      ),
      itemBuilder: (context, index) {
        final item = _quickActions[index];
        return Container(
          decoration: BoxDecoration(
            color: const Color(0xFF17141E),
            borderRadius: BorderRadius.circular(24),
            border: Border.all(color: const Color(0xFF2E2A39)),
          ),
          padding: const EdgeInsets.all(14),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                width: 48,
                height: 48,
                decoration: BoxDecoration(
                  color: item.accent,
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Icon(item.icon, color: Colors.white, size: 24),
              ),
              const Spacer(),
              Text(
                item.title,
                style: const TextStyle(
                  color: Color(0xFFF0EEF5),
                  fontSize: 14,
                  fontWeight: FontWeight.w700,
                ),
              ),
              const SizedBox(height: 4),
              Text(
                item.subtitle,
                style: const TextStyle(
                  color: Color(0xFF8A8498),
                  fontSize: 11,
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _buildSectionHeader(String title, String? action) {
    return Row(
      children: [
        Text(
          title,
          style: const TextStyle(
            color: Color(0xFFF0EEF5),
            fontSize: 22,
            fontWeight: FontWeight.w800,
            letterSpacing: -0.5,
          ),
        ),
        const Spacer(),
        if (action != null)
          Text(
            action,
            style: const TextStyle(
              color: Color(0xFFFF4D6D),
              fontSize: 14,
              fontWeight: FontWeight.w600,
            ),
          ),
      ],
    );
  }

  Widget _buildOpenDaresList() {
    return ListView.separated(
      scrollDirection: Axis.horizontal,
      itemCount: _openDares.length,
      separatorBuilder: (_, __) => const SizedBox(width: 14),
      itemBuilder: (context, index) {
        final dare = _openDares[index];
        return Container(
          width: 290,
          padding: const EdgeInsets.all(18),
          decoration: BoxDecoration(
            color: const Color(0xFF17141E),
            borderRadius: BorderRadius.circular(28),
            border: Border.all(color: const Color(0xFF2E2A39)),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _chip(
                dare.badge,
                bg: const Color(0xFF23202C),
                fg: const Color(0xFFFF4D6D),
              ),
              const SizedBox(height: 18),
              Text(
                dare.title,
                style: const TextStyle(
                  color: Color(0xFFF0EEF5),
                  fontSize: 18,
                  fontWeight: FontWeight.w700,
                  height: 1.25,
                ),
              ),
              const SizedBox(height: 10),
              Text(
                dare.meta,
                style: const TextStyle(
                  color: Color(0xFF8A8498),
                  fontSize: 13,
                ),
              ),
              const Spacer(),
              Row(
                children: [
                  Expanded(
                    child: Container(
                      height: 42,
                      decoration: BoxDecoration(
                        color: const Color(0xFF23202C),
                        borderRadius: BorderRadius.circular(16),
                      ),
                      child: const Center(
                        child: Text(
                          'Like',
                          style: TextStyle(
                            color: Color(0xFFF0EEF5),
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    flex: 2,
                    child: Container(
                      height: 42,
                      decoration: BoxDecoration(
                        color: const Color(0xFFFF4D6D),
                        borderRadius: BorderRadius.circular(16),
                      ),
                      child: const Center(
                        child: Text(
                          'Accept',
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _buildActivitiesList() {
    return Column(
      children: List.generate(_activities.length, (index) {
        final item = _activities[index];
        return Padding(
          padding: EdgeInsets.only(bottom: index == _activities.length - 1 ? 0 : 12),
          child: Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: const Color(0xFF17141E),
              borderRadius: BorderRadius.circular(24),
              border: Border.all(color: const Color(0xFF2E2A39)),
            ),
            child: Row(
              children: [
                Container(
                  width: 54,
                  height: 54,
                  decoration: BoxDecoration(
                    color: item.accent.withOpacity(0.18),
                    borderRadius: BorderRadius.circular(18),
                  ),
                  child: Icon(item.icon, color: item.accent, size: 26),
                ),
                const SizedBox(width: 14),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        item.title,
                        style: const TextStyle(
                          color: Color(0xFFF0EEF5),
                          fontSize: 15,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                      const SizedBox(height: 6),
                      Text(
                        item.subtitle,
                        style: const TextStyle(
                          color: Color(0xFF8A8498),
                          fontSize: 13,
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(width: 12),
                Container(
                  padding:
                  const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  decoration: BoxDecoration(
                    color: const Color(0xFF23202C),
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: Text(
                    item.label,
                    style: TextStyle(
                      color: item.accent,
                      fontSize: 12,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                ),
              ],
            ),
          ),
        );
      }),
    );
  }

  Widget _buildSafetyCard() {
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: const Color(0xFF131A18),
        borderRadius: BorderRadius.circular(28),
        border: Border.all(color: const Color(0xFF2B3A35)),
      ),
      child: Row(
        children: [
          Container(
            width: 58,
            height: 58,
            decoration: BoxDecoration(
              color: const Color(0xFF6FCF97),
              borderRadius: BorderRadius.circular(18),
            ),
            child: const Icon(
              Icons.shield_rounded,
              color: Colors.white,
              size: 28,
            ),
          ),
          const SizedBox(width: 16),
          const Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Safety Center',
                  style: TextStyle(
                    color: Color(0xFFF0EEF5),
                    fontSize: 19,
                    fontWeight: FontWeight.w800,
                  ),
                ),
                SizedBox(height: 6),
                Text(
                  'Verified only • Privacy controls • Report & help',
                  style: TextStyle(
                    color: Color(0xFFA7BBB0),
                    fontSize: 13,
                    height: 1.4,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _chip(String text, {required Color bg, required Color fg}) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      decoration: BoxDecoration(
        color: bg,
        borderRadius: BorderRadius.circular(14),
      ),
      child: Text(
        text,
        style: TextStyle(
          color: fg,
          fontSize: 12,
          fontWeight: FontWeight.w600,
        ),
      ),
    );
  }

  Widget _buildFeaturedProfileSkeleton() {
    return _SkeletonShimmer(
      controller: _shimmerController,
      child: Container(
        decoration: BoxDecoration(
          color: const Color(0xFF17141E),
          borderRadius: BorderRadius.circular(30),
          border: Border.all(color: const Color(0xFF2E2A39)),
        ),
        child: Padding(
          padding: const EdgeInsets.all(18),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _skeletonBox(height: 360, radius: 28),
              const SizedBox(height: 16),
              _skeletonBox(width: 180, height: 28, radius: 12),
              const SizedBox(height: 12),
              _skeletonBox(width: double.infinity, height: 16, radius: 10),
              const SizedBox(height: 8),
              _skeletonBox(width: 220, height: 16, radius: 10),
              const SizedBox(height: 16),
              Row(
                children: List.generate(
                  3,
                      (index) => Padding(
                    padding: EdgeInsets.only(right: index == 2 ? 0 : 10),
                    child: _skeletonBox(width: 84, height: 34, radius: 16),
                  ),
                ),
              ),
              const SizedBox(height: 16),
              _skeletonBox(width: double.infinity, height: 44, radius: 16),
              const SizedBox(height: 18),
              Row(
                children: [
                  Expanded(child: _skeletonBox(height: 48, radius: 18)),
                  const SizedBox(width: 12),
                  Expanded(child: _skeletonBox(height: 48, radius: 18)),
                  const SizedBox(width: 12),
                  Expanded(flex: 2, child: _skeletonBox(height: 48, radius: 18)),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildQuickActionsSkeleton() {
    return _SkeletonShimmer(
      controller: _shimmerController,
      child: GridView.builder(
        itemCount: 4,
        shrinkWrap: true,
        physics: const NeverScrollableScrollPhysics(),
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 4,
          crossAxisSpacing: 12,
          mainAxisSpacing: 12,
          childAspectRatio: 0.72,
        ),
        itemBuilder: (_, __) => Container(
          decoration: BoxDecoration(
            color: const Color(0xFF17141E),
            borderRadius: BorderRadius.circular(24),
            border: Border.all(color: const Color(0xFF2E2A39)),
          ),
          padding: const EdgeInsets.all(14),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _skeletonBox(width: 48, height: 48, radius: 16),
              const Spacer(),
              _skeletonBox(width: 70, height: 14, radius: 8),
              const SizedBox(height: 8),
              _skeletonBox(width: 56, height: 10, radius: 8),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildOpenDaresSkeleton() {
    return _SkeletonShimmer(
      controller: _shimmerController,
      child: ListView.separated(
        scrollDirection: Axis.horizontal,
        itemCount: 3,
        separatorBuilder: (_, __) => const SizedBox(width: 14),
        itemBuilder: (_, __) => Container(
          width: 290,
          padding: const EdgeInsets.all(18),
          decoration: BoxDecoration(
            color: const Color(0xFF17141E),
            borderRadius: BorderRadius.circular(28),
            border: Border.all(color: const Color(0xFF2E2A39)),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _skeletonBox(width: 64, height: 28, radius: 12),
              const SizedBox(height: 18),
              _skeletonBox(width: 180, height: 18, radius: 10),
              const SizedBox(height: 10),
              _skeletonBox(width: 220, height: 14, radius: 10),
              const Spacer(),
              Row(
                children: [
                  Expanded(child: _skeletonBox(height: 42, radius: 16)),
                  const SizedBox(width: 10),
                  Expanded(flex: 2, child: _skeletonBox(height: 42, radius: 16)),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildActivitiesSkeleton() {
    return _SkeletonShimmer(
      controller: _shimmerController,
      child: Column(
        children: List.generate(
          2,
              (index) => Padding(
            padding: EdgeInsets.only(bottom: index == 1 ? 0 : 12),
            child: Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: const Color(0xFF17141E),
                borderRadius: BorderRadius.circular(24),
                border: Border.all(color: const Color(0xFF2E2A39)),
              ),
              child: Row(
                children: [
                  _skeletonBox(width: 54, height: 54, radius: 18),
                  const SizedBox(width: 14),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        _skeletonBox(width: 180, height: 16, radius: 8),
                        const SizedBox(height: 10),
                        _skeletonBox(width: 220, height: 13, radius: 8),
                      ],
                    ),
                  ),
                  const SizedBox(width: 12),
                  _skeletonBox(width: 60, height: 34, radius: 14),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildSafetySkeleton() {
    return _SkeletonShimmer(
      controller: _shimmerController,
      child: Container(
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(
          color: const Color(0xFF131A18),
          borderRadius: BorderRadius.circular(28),
          border: Border.all(color: const Color(0xFF2B3A35)),
        ),
        child: Row(
          children: [
            _skeletonBox(width: 58, height: 58, radius: 18),
            const SizedBox(width: 16),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _skeletonBox(width: 140, height: 18, radius: 10),
                  const SizedBox(height: 10),
                  _skeletonBox(width: 240, height: 14, radius: 10),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _skeletonBox({
    double? width,
    required double height,
    double radius = 12,
  }) {
    return Container(
      width: width,
      height: height,
      decoration: BoxDecoration(
        color: const Color(0xFF23202C),
        borderRadius: BorderRadius.circular(radius),
      ),
    );
  }
}

class _HomeBackground extends StatelessWidget {
  const _HomeBackground();

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: const [
        Positioned(
          top: -120,
          right: -80,
          child: _BlurGlow(
            size: 320,
            color: Color(0x33FF4D6D),
          ),
        ),
        Positioned(
          bottom: 100,
          left: -60,
          child: _BlurGlow(
            size: 240,
            color: Color(0x26BF5AF2),
          ),
        ),
        Positioned(
          top: 420,
          right: 40,
          child: _BlurGlow(
            size: 120,
            color: Color(0x12FFD60A),
          ),
        ),
      ],
    );
  }
}

class _BlurGlow extends StatelessWidget {
  const _BlurGlow({required this.size, required this.color});

  final double size;
  final Color color;

  @override
  Widget build(BuildContext context) {
    return IgnorePointer(
      child: Container(
        width: size,
        height: size,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          boxShadow: [
            BoxShadow(
              color: color,
              blurRadius: size / 1.5,
              spreadRadius: size / 8,
            ),
          ],
        ),
      ),
    );
  }
}

class _SkeletonShimmer extends StatelessWidget {
  const _SkeletonShimmer({
    required this.controller,
    required this.child,
  });

  final AnimationController controller;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: controller,
      builder: (context, _) {
        return ShaderMask(
          blendMode: BlendMode.srcATop,
          shaderCallback: (bounds) {
            final width = bounds.width;
            final value = controller.value;
            return LinearGradient(
              begin: Alignment(-1.0 + (2.0 * value), 0),
              end: Alignment(-0.2 + (2.0 * value), 0),
              colors: const [
                Color(0xFF23202C),
                Color(0xFF302B3B),
                Color(0xFF23202C),
              ],
              stops: const [0.1, 0.5, 0.9],
            ).createShader(Rect.fromLTWH(0, 0, width, bounds.height));
          },
          child: child,
        );
      },
    );
  }
}

class ProfileData {
  const ProfileData({
    required this.name,
    required this.age,
    required this.distance,
    required this.bio,
    required this.tags,
    required this.recentDare,
  });

  final String name;
  final int age;
  final String distance;
  final String bio;
  final List<String> tags;
  final String recentDare;
}

class QuickActionData {
  const QuickActionData({
    required this.title,
    required this.subtitle,
    required this.icon,
    required this.accent,
  });

  final String title;
  final String subtitle;
  final IconData icon;
  final Color accent;
}

class DareCardData {
  const DareCardData({
    required this.title,
    required this.meta,
    required this.badge,
  });

  final String title;
  final String meta;
  final String badge;
}

class ActivityCardData {
  const ActivityCardData({
    required this.title,
    required this.subtitle,
    required this.label,
    required this.icon,
    required this.accent,
  });

  final String title;
  final String subtitle;
  final String label;
  final IconData icon;
  final Color accent;
}
