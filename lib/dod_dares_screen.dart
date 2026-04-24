import 'package:flutter/material.dart';

class DodDaresScreen extends StatefulWidget {
  const DodDaresScreen({super.key});

  @override
  State<DodDaresScreen> createState() => _DodDaresScreenState();
}

class _DodDaresScreenState extends State<DodDaresScreen>
    with SingleTickerProviderStateMixin {
  late final Future<void> _loadFuture;
  late final AnimationController _shimmerController;

  final List<String> _filters = const [
    'For You',
    'Trending',
    'Nearby',
    'Verified',
    'Flirty',
    'Fun',
  ];

  final List<DareCategoryData> _categories = const [
    DareCategoryData(
      title: 'Voice',
      subtitle: 'Audio sparks',
      icon: Icons.mic_rounded,
      accent: Color(0xFFFF4D6D),
    ),
    DareCategoryData(
      title: 'Funny',
      subtitle: 'Break the ice',
      icon: Icons.sentiment_very_satisfied_rounded,
      accent: Color(0xFFBF5AF2),
    ),
    DareCategoryData(
      title: 'Bold',
      subtitle: 'High energy',
      icon: Icons.bolt_rounded,
      accent: Color(0xFFFFD60A),
    ),
    DareCategoryData(
      title: 'Date',
      subtitle: 'Plan IRL',
      icon: Icons.calendar_month_rounded,
      accent: Color(0xFF6FCF97),
    ),
  ];

  final List<FeaturedDareData> _featuredDares = const [
    FeaturedDareData(
      title: 'Send your best late-night voice note',
      subtitle: 'Soft voice, one honest line, no overthinking.',
      meta: '20 pts • 2h left • Flirty',
      accent: Color(0xFFFF4D6D),
    ),
    FeaturedDareData(
      title: 'Make me laugh in under 10 seconds',
      subtitle: 'Short, spontaneous, and impossible to fake.',
      meta: '15 pts • Nearby • Fun',
      accent: Color(0xFFBF5AF2),
    ),
  ];

  final List<OpenDareData> _openDares = const [
    OpenDareData(
      title: 'Coffee dare this weekend?',
      description: 'Pitch the spot and the plan in one sentence.',
      points: '30 pts',
      time: 'Verified only',
      category: 'Date',
      accent: Color(0xFFFFD60A),
    ),
    OpenDareData(
      title: 'Drop your boldest playlist opener',
      description: 'One song that says too much about you.',
      points: '18 pts',
      time: '4h left',
      category: 'Music',
      accent: Color(0xFFFF4D6D),
    ),
    OpenDareData(
      title: 'Three emojis, one mood, no explanation',
      description: 'Let the chaos do the flirting.',
      points: '12 pts',
      time: 'Trending',
      category: 'Fun',
      accent: Color(0xFFBF5AF2),
    ),
    OpenDareData(
      title: 'Pitch a mini date in 15 words',
      description: 'Fast, cute, and specific always wins.',
      points: '24 pts',
      time: 'Nearby',
      category: 'Date',
      accent: Color(0xFF6FCF97),
    ),
  ];

  final List<DareProgressData> _progressCards = const [
    DareProgressData(
      title: 'Pending proof review',
      subtitle: '2 dares need your response tonight',
      icon: Icons.verified_rounded,
      accent: Color(0xFFFFD60A),
    ),
    DareProgressData(
      title: 'Created by you',
      subtitle: '4 active dares are getting attention',
      icon: Icons.edit_note_rounded,
      accent: Color(0xFF6FCF97),
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
    return Scaffold(
      backgroundColor: const Color(0xFF0D0C0F),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () {},
        backgroundColor: const Color(0xFFFF4D6D),
        foregroundColor: Colors.white,
        elevation: 0,
        label: const Text(
          'Create Dare',
          style: TextStyle(fontWeight: FontWeight.w700),
        ),
        icon: const Icon(Icons.add_rounded),
      ),
      body: FutureBuilder<void>(
        future: _loadFuture,
        builder: (context, snapshot) {
          final isLoading = snapshot.connectionState != ConnectionState.done;
          return Stack(
            children: [
              const _DaresBackground(),
              SafeArea(
                child: CustomScrollView(
                  physics: const BouncingScrollPhysics(),
                  slivers: [
                    SliverPadding(
                      padding: const EdgeInsets.fromLTRB(20, 16, 20, 120),
                      sliver: SliverList(
                        delegate: SliverChildListDelegate([
                          _buildTopBar(),
                          const SizedBox(height: 18),
                          if (isLoading)
                            _buildHeroSkeleton()
                          else
                            _buildHeroCard(),
                          const SizedBox(height: 20),
                          if (isLoading)
                            _buildFilterSkeleton()
                          else
                            _buildFiltersRow(),
                          const SizedBox(height: 22),
                          _buildSectionHeader('Categories', 'Browse'),
                          const SizedBox(height: 12),
                          SizedBox(
                            height: 150,
                            child: isLoading
                                ? _buildCategoriesSkeleton()
                                : _buildCategoriesList(),
                          ),
                          const SizedBox(height: 24),
                          _buildSectionHeader('Featured Dares', 'Curated'),
                          const SizedBox(height: 12),
                          SizedBox(
                            height: 220,
                            child: isLoading
                                ? _buildFeaturedDaresSkeleton()
                                : _buildFeaturedDaresList(),
                          ),
                          const SizedBox(height: 24),
                          _buildSectionHeader('Open Dares', 'See all'),
                          const SizedBox(height: 12),
                          if (isLoading)
                            _buildOpenDaresSkeleton()
                          else
                            _buildOpenDaresList(),
                          const SizedBox(height: 24),
                          _buildSectionHeader('Your Momentum', null),
                          const SizedBox(height: 12),
                          if (isLoading)
                            _buildProgressSkeleton()
                          else
                            _buildProgressList(),
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
        const Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Dares',
                style: TextStyle(
                  color: Color(0xFFF0EEF5),
                  fontSize: 30,
                  fontWeight: FontWeight.w800,
                  letterSpacing: -0.8,
                ),
              ),
              SizedBox(height: 6),
              Text(
                'Choose your vibe, raise the stakes, keep it playful.',
                style: TextStyle(
                  color: Color(0xFF8A8498),
                  fontSize: 14,
                  height: 1.45,
                ),
              ),
            ],
          ),
        ),
        const SizedBox(width: 12),
        _topIcon(Icons.search_rounded),
        const SizedBox(width: 10),
        _topIcon(Icons.tune_rounded),
      ],
    );
  }

  Widget _topIcon(IconData icon) {
    return Container(
      width: 44,
      height: 44,
      decoration: BoxDecoration(
        color: const Color(0xFF211E2A),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: const Color(0xFF383446)),
      ),
      child: Icon(icon, color: const Color(0xFFB2AEBE), size: 20),
    );
  }

  Widget _buildHeroCard() {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(30),
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF1C1624), Color(0xFF251727), Color(0xFF351927)],
        ),
        border: Border.all(color: const Color(0xFF35273A)),
        boxShadow: [
          BoxShadow(
            color: const Color(0xFFFF4D6D).withOpacity(0.10),
            blurRadius: 28,
            spreadRadius: 2,
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                decoration: BoxDecoration(
                  color: const Color(0xFF0D0C0F).withOpacity(0.50),
                  borderRadius: BorderRadius.circular(999),
                ),
                child: const Text(
                  'Tonight\'s vibe',
                  style: TextStyle(
                    color: Color(0xFFFFD60A),
                    fontSize: 12,
                    fontWeight: FontWeight.w700,
                  ),
                ),
              ),
              const Spacer(),
              const Icon(Icons.local_fire_department_rounded,
                  color: Color(0xFFFF4D6D)),
            ],
          ),
          const SizedBox(height: 18),
          const Text(
            'Dares make first moves easier.',
            style: TextStyle(
              color: Color(0xFFF0EEF5),
              fontSize: 28,
              fontWeight: FontWeight.w800,
              letterSpacing: -0.8,
              height: 1.1,
            ),
          ),
          const SizedBox(height: 10),
          const Text(
            'Pick something light, funny, or bold and let the challenge start the chemistry for you.',
            style: TextStyle(
              color: Color(0xFFC1BBCD),
              fontSize: 14,
              height: 1.5,
            ),
          ),
          const SizedBox(height: 18),
          Row(
            children: [
              Expanded(
                child: Container(
                  height: 48,
                  decoration: BoxDecoration(
                    color: const Color(0xFFFF4D6D),
                    borderRadius: BorderRadius.circular(18),
                  ),
                  child: const Center(
                    child: Text(
                      'Start a Dare',
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                  ),
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Container(
                  height: 48,
                  decoration: BoxDecoration(
                    color: const Color(0xFF23202C),
                    borderRadius: BorderRadius.circular(18),
                  ),
                  child: const Center(
                    child: Text(
                      'Saved ideas',
                      style: TextStyle(
                        color: Color(0xFFF0EEF5),
                        fontWeight: FontWeight.w600,
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
  }

  Widget _buildFiltersRow() {
    return SizedBox(
      height: 42,
      child: ListView.separated(
        scrollDirection: Axis.horizontal,
        itemCount: _filters.length,
        separatorBuilder: (_, __) => const SizedBox(width: 10),
        itemBuilder: (context, index) {
          final active = index == 0;
          return Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
            decoration: BoxDecoration(
              color: active ? const Color(0xFFFF4D6D) : const Color(0xFF17141E),
              borderRadius: BorderRadius.circular(999),
              border: Border.all(
                color: active ? const Color(0xFFFF4D6D) : const Color(0xFF2E2A39),
              ),
            ),
            child: Text(
              _filters[index],
              style: TextStyle(
                color: active ? Colors.white : const Color(0xFFB2AEBE),
                fontSize: 13,
                fontWeight: FontWeight.w600,
              ),
            ),
          );
        },
      ),
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

  Widget _buildCategoriesList() {
    return ListView.separated(
      scrollDirection: Axis.horizontal,
      itemCount: _categories.length,
      separatorBuilder: (_, __) => const SizedBox(width: 12),
      itemBuilder: (context, index) {
        final item = _categories[index];
        return Container(
          width: 138,
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: const Color(0xFF17141E),
            borderRadius: BorderRadius.circular(26),
            border: Border.all(color: const Color(0xFF2E2A39)),
          ),
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
                child: Icon(item.icon, color: Colors.white),
              ),
              const Spacer(),
              Text(
                item.title,
                style: const TextStyle(
                  color: Color(0xFFF0EEF5),
                  fontSize: 16,
                  fontWeight: FontWeight.w700,
                ),
              ),
              const SizedBox(height: 4),
              Text(
                item.subtitle,
                style: const TextStyle(
                  color: Color(0xFF8A8498),
                  fontSize: 12,
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _buildFeaturedDaresList() {
    return ListView.separated(
      scrollDirection: Axis.horizontal,
      itemCount: _featuredDares.length,
      separatorBuilder: (_, __) => const SizedBox(width: 14),
      itemBuilder: (context, index) {
        final item = _featuredDares[index];
        return Container(
          width: 300,
          padding: const EdgeInsets.all(18),
          decoration: BoxDecoration(
            color: const Color(0xFF17141E),
            borderRadius: BorderRadius.circular(28),
            border: Border.all(color: const Color(0xFF2E2A39)),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                decoration: BoxDecoration(
                  color: item.accent.withOpacity(0.14),
                  borderRadius: BorderRadius.circular(999),
                ),
                child: Text(
                  item.meta,
                  style: TextStyle(
                    color: item.accent,
                    fontSize: 12,
                    fontWeight: FontWeight.w700,
                  ),
                ),
              ),
              const SizedBox(height: 18),
              Text(
                item.title,
                style: const TextStyle(
                  color: Color(0xFFF0EEF5),
                  fontSize: 20,
                  fontWeight: FontWeight.w800,
                  height: 1.2,
                ),
              ),
              const SizedBox(height: 10),
              Text(
                item.subtitle,
                style: const TextStyle(
                  color: Color(0xFF8A8498),
                  fontSize: 13,
                  height: 1.45,
                ),
              ),
              const Spacer(),
              Container(
                height: 44,
                decoration: BoxDecoration(
                  color: const Color(0xFF23202C),
                  borderRadius: BorderRadius.circular(16),
                ),
                child: const Center(
                  child: Text(
                    'Try this dare',
                    style: TextStyle(
                      color: Color(0xFFF0EEF5),
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _buildOpenDaresList() {
    return Column(
      children: List.generate(_openDares.length, (index) {
        final item = _openDares[index];
        return Padding(
          padding: EdgeInsets.only(bottom: index == _openDares.length - 1 ? 0 : 12),
          child: Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: const Color(0xFF17141E),
              borderRadius: BorderRadius.circular(24),
              border: Border.all(color: const Color(0xFF2E2A39)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Expanded(
                      child: Text(
                        item.title,
                        style: const TextStyle(
                          color: Color(0xFFF0EEF5),
                          fontSize: 17,
                          fontWeight: FontWeight.w700,
                          height: 1.25,
                        ),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                      decoration: BoxDecoration(
                        color: item.accent.withOpacity(0.14),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Text(
                        item.points,
                        style: TextStyle(
                          color: item.accent,
                          fontSize: 12,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 10),
                Text(
                  item.description,
                  style: const TextStyle(
                    color: Color(0xFF8A8498),
                    fontSize: 13,
                    height: 1.45,
                  ),
                ),
                const SizedBox(height: 14),
                Wrap(
                  spacing: 10,
                  runSpacing: 10,
                  children: [
                    _metaChip(item.time),
                    _metaChip(item.category),
                  ],
                ),
                const SizedBox(height: 16),
                Row(
                  children: [
                    Expanded(
                      child: Container(
                        height: 44,
                        decoration: BoxDecoration(
                          color: const Color(0xFF23202C),
                          borderRadius: BorderRadius.circular(16),
                        ),
                        child: const Center(
                          child: Text(
                            'Save',
                            style: TextStyle(
                              color: Color(0xFFF0EEF5),
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      flex: 2,
                      child: Container(
                        height: 44,
                        decoration: BoxDecoration(
                          color: const Color(0xFFFF4D6D),
                          borderRadius: BorderRadius.circular(16),
                        ),
                        child: const Center(
                          child: Text(
                            'Accept Dare',
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
          ),
        );
      }),
    );
  }

  Widget _metaChip(String text) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      decoration: BoxDecoration(
        color: const Color(0xFF23202C),
        borderRadius: BorderRadius.circular(14),
      ),
      child: Text(
        text,
        style: const TextStyle(
          color: Color(0xFFB2AEBE),
          fontSize: 12,
          fontWeight: FontWeight.w600,
        ),
      ),
    );
  }

  Widget _buildProgressList() {
    return Column(
      children: List.generate(_progressCards.length, (index) {
        final item = _progressCards[index];
        return Padding(
          padding: EdgeInsets.only(bottom: index == _progressCards.length - 1 ? 0 : 12),
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
                    color: item.accent.withOpacity(0.14),
                    borderRadius: BorderRadius.circular(18),
                  ),
                  child: Icon(item.icon, color: item.accent),
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
                const Icon(Icons.chevron_right_rounded,
                    color: Color(0xFF8A8498)),
              ],
            ),
          ),
        );
      }),
    );
  }

  Widget _buildHeroSkeleton() {
    return _SkeletonShimmer(
      controller: _shimmerController,
      child: Container(
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: const Color(0xFF17141E),
          borderRadius: BorderRadius.circular(30),
          border: Border.all(color: const Color(0xFF2E2A39)),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _skeletonBox(width: 110, height: 28, radius: 999),
            const SizedBox(height: 18),
            _skeletonBox(width: 220, height: 28, radius: 10),
            const SizedBox(height: 10),
            _skeletonBox(width: double.infinity, height: 14, radius: 10),
            const SizedBox(height: 8),
            _skeletonBox(width: 260, height: 14, radius: 10),
            const SizedBox(height: 18),
            Row(
              children: [
                Expanded(child: _skeletonBox(height: 48, radius: 18)),
                const SizedBox(width: 12),
                Expanded(child: _skeletonBox(height: 48, radius: 18)),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildFilterSkeleton() {
    return _SkeletonShimmer(
      controller: _shimmerController,
      child: SizedBox(
        height: 42,
        child: ListView.separated(
          scrollDirection: Axis.horizontal,
          itemCount: 5,
          separatorBuilder: (_, __) => const SizedBox(width: 10),
          itemBuilder: (_, __) => _skeletonBox(width: 78, height: 42, radius: 999),
        ),
      ),
    );
  }

  Widget _buildCategoriesSkeleton() {
    return _SkeletonShimmer(
      controller: _shimmerController,
      child: ListView.separated(
        scrollDirection: Axis.horizontal,
        itemCount: 4,
        separatorBuilder: (_, __) => const SizedBox(width: 12),
        itemBuilder: (_, __) => Container(
          width: 138,
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: const Color(0xFF17141E),
            borderRadius: BorderRadius.circular(26),
            border: Border.all(color: const Color(0xFF2E2A39)),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _skeletonBox(width: 48, height: 48, radius: 16),
              const Spacer(),
              _skeletonBox(width: 70, height: 16, radius: 8),
              const SizedBox(height: 6),
              _skeletonBox(width: 62, height: 12, radius: 8),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildFeaturedDaresSkeleton() {
    return _SkeletonShimmer(
      controller: _shimmerController,
      child: ListView.separated(
        scrollDirection: Axis.horizontal,
        itemCount: 2,
        separatorBuilder: (_, __) => const SizedBox(width: 14),
        itemBuilder: (_, __) => Container(
          width: 300,
          padding: const EdgeInsets.all(18),
          decoration: BoxDecoration(
            color: const Color(0xFF17141E),
            borderRadius: BorderRadius.circular(28),
            border: Border.all(color: const Color(0xFF2E2A39)),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _skeletonBox(width: 130, height: 28, radius: 999),
              const SizedBox(height: 18),
              _skeletonBox(width: 210, height: 18, radius: 10),
              const SizedBox(height: 10),
              _skeletonBox(width: 240, height: 14, radius: 10),
              const Spacer(),
              _skeletonBox(height: 44, radius: 16),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildOpenDaresSkeleton() {
    return _SkeletonShimmer(
      controller: _shimmerController,
      child: Column(
        children: List.generate(
          4,
          (index) => Padding(
            padding: EdgeInsets.only(bottom: index == 3 ? 0 : 12),
            child: Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: const Color(0xFF17141E),
                borderRadius: BorderRadius.circular(24),
                border: Border.all(color: const Color(0xFF2E2A39)),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Expanded(child: _skeletonBox(height: 18, radius: 8)),
                      const SizedBox(width: 12),
                      _skeletonBox(width: 64, height: 26, radius: 12),
                    ],
                  ),
                  const SizedBox(height: 10),
                  _skeletonBox(width: double.infinity, height: 14, radius: 8),
                  const SizedBox(height: 8),
                  _skeletonBox(width: 220, height: 14, radius: 8),
                  const SizedBox(height: 14),
                  Row(
                    children: [
                      _skeletonBox(width: 84, height: 32, radius: 14),
                      const SizedBox(width: 10),
                      _skeletonBox(width: 74, height: 32, radius: 14),
                    ],
                  ),
                  const SizedBox(height: 16),
                  Row(
                    children: [
                      Expanded(child: _skeletonBox(height: 44, radius: 16)),
                      const SizedBox(width: 12),
                      Expanded(flex: 2, child: _skeletonBox(height: 44, radius: 16)),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildProgressSkeleton() {
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
                        _skeletonBox(width: 170, height: 16, radius: 8),
                        const SizedBox(height: 8),
                        _skeletonBox(width: 220, height: 13, radius: 8),
                      ],
                    ),
                  ),
                  const SizedBox(width: 12),
                  _skeletonBox(width: 20, height: 20, radius: 10),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _skeletonBox({double? width, required double height, double radius = 12}) {
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

class _DaresBackground extends StatelessWidget {
  const _DaresBackground();

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: const [
        Positioned(
          top: -80,
          right: -70,
          child: _BlurGlow(size: 280, color: Color(0x2AFF4D6D)),
        ),
        Positioned(
          top: 360,
          left: -50,
          child: _BlurGlow(size: 220, color: Color(0x1FBF5AF2)),
        ),
        Positioned(
          bottom: 180,
          right: 10,
          child: _BlurGlow(size: 170, color: Color(0x18FFD60A)),
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
              blurRadius: size / 1.4,
              spreadRadius: size / 9,
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
            return LinearGradient(
              begin: Alignment(-1.0 + (2.0 * controller.value), 0),
              end: Alignment(-0.2 + (2.0 * controller.value), 0),
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

class DareCategoryData {
  const DareCategoryData({
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

class FeaturedDareData {
  const FeaturedDareData({
    required this.title,
    required this.subtitle,
    required this.meta,
    required this.accent,
  });

  final String title;
  final String subtitle;
  final String meta;
  final Color accent;
}

class OpenDareData {
  const OpenDareData({
    required this.title,
    required this.description,
    required this.points,
    required this.time,
    required this.category,
    required this.accent,
  });

  final String title;
  final String description;
  final String points;
  final String time;
  final String category;
  final Color accent;
}

class DareProgressData {
  const DareProgressData({
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
