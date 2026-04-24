import 'dart:async';
import 'dart:math' as math;
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Dare or Date',
      theme: ThemeData(
        useMaterial3: true,
        scaffoldBackgroundColor: const Color(0xFF0D0C0F),
        fontFamily: 'Satoshi',
        colorScheme: const ColorScheme.dark(
          primary: Color(0xFFFF4D6D),
          secondary: Color(0xFFBF5AF2),
          surface: Color(0xFF131118),
        ),
      ),
      home: const DareOrDateSplashPage(),
    );
  }
}

class DareOrDateSplashPage extends StatefulWidget {
  const DareOrDateSplashPage({super.key});

  @override
  State<DareOrDateSplashPage> createState() => _DareOrDateSplashPageState();
}

class _DareOrDateSplashPageState extends State<DareOrDateSplashPage>
    with TickerProviderStateMixin {
  late final AnimationController _master;
  late final AnimationController _float1;
  late final AnimationController _float2;
  late final AnimationController _float3;
  late final Animation<double> _logoScale;
  late final Animation<double> _logoOpacity;
  late final Animation<Offset> _logoSlide;
  late final Animation<double> _textOpacity;
  late final Animation<Offset> _textSlide;
  late final Animation<double> _buttonOpacity;
  late final Animation<double> _buttonScale;
  late final Animation<double> _statsOpacity;
  late final Animation<double> _progressValue;

  @override
  void initState() {
    super.initState();
    _master = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 2800),
    )..forward();

    _float1 = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 8),
    )..repeat(reverse: true);

    _float2 = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 10),
    )..repeat(reverse: true);

    _float3 = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 7),
    )..repeat(reverse: true);

    _logoScale = Tween<double>(begin: 0.82, end: 1).animate(
      CurvedAnimation(
        parent: _master,
        curve: const Interval(0.00, 0.35, curve: Curves.easeOutBack),
      ),
    );

    _logoOpacity = Tween<double>(begin: 0, end: 1).animate(
      CurvedAnimation(
        parent: _master,
        curve: const Interval(0.00, 0.25, curve: Curves.easeOut),
      ),
    );

    _logoSlide = Tween<Offset>(
      begin: const Offset(0, 0.12),
      end: Offset.zero,
    ).animate(
      CurvedAnimation(
        parent: _master,
        curve: const Interval(0.00, 0.32, curve: Curves.easeOutCubic),
      ),
    );

    _textOpacity = Tween<double>(begin: 0, end: 1).animate(
      CurvedAnimation(
        parent: _master,
        curve: const Interval(0.18, 0.48, curve: Curves.easeOut),
      ),
    );

    _textSlide = Tween<Offset>(
      begin: const Offset(0, 0.10),
      end: Offset.zero,
    ).animate(
      CurvedAnimation(
        parent: _master,
        curve: const Interval(0.18, 0.48, curve: Curves.easeOutCubic),
      ),
    );

    _buttonOpacity = Tween<double>(begin: 0, end: 1).animate(
      CurvedAnimation(
        parent: _master,
        curve: const Interval(0.34, 0.62, curve: Curves.easeOut),
      ),
    );

    _buttonScale = Tween<double>(begin: 0.94, end: 1).animate(
      CurvedAnimation(
        parent: _master,
        curve: const Interval(0.34, 0.65, curve: Curves.easeOutBack),
      ),
    );

    _statsOpacity = Tween<double>(begin: 0, end: 1).animate(
      CurvedAnimation(
        parent: _master,
        curve: const Interval(0.46, 0.78, curve: Curves.easeOut),
      ),
    );

    _progressValue = Tween<double>(begin: 0, end: 1).animate(
      CurvedAnimation(
        parent: _master,
        curve: const Interval(0.20, 1.0, curve: Curves.easeInOut),
      ),
    );

    Timer(const Duration(milliseconds: 3200), () {
      if (!mounted) return;
      Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (_) => const PlaceholderHomePage()),
      );
    });
  }

  @override
  void dispose() {
    _master.dispose();
    _float1.dispose();
    _float2.dispose();
    _float3.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    const bg = Color(0xFF0D0C0F);
    const coral = Color(0xFFFF4D6D);
    const violet = Color(0xFFBF5AF2);
    const gold = Color(0xFFFFD60A);
    const text = Color(0xFFF0EEF5);
    const textMuted = Color(0xFF8A8498);
    const textFaint = Color(0xFF4E4A58);
    const divider = Color(0xFF2A2733);

    return Scaffold(
      body: SafeArea(
        child: AnimatedBuilder(
          animation: Listenable.merge([_master, _float1, _float2, _float3]),
          builder: (context, _) {
            return Stack(
              fit: StackFit.expand,
              children: [
                const DecoratedBox(
                  decoration: BoxDecoration(color: bg),
                ),
                CustomPaint(
                  painter: _GridPainter(color: divider.withOpacity(0.22)),
                ),
                Positioned(
                  top: -120 + (_float1.value * 30),
                  right: -100 - (_float1.value * 24),
                  child: _GlowBlob(
                    size: 320,
                    colors: [coral.withOpacity(0.55), Colors.transparent],
                  ),
                ),
                Positioned(
                  bottom: -70 - (_float2.value * 20),
                  left: -90 + (_float2.value * 16),
                  child: _GlowBlob(
                    size: 240,
                    colors: [violet.withOpacity(0.42), Colors.transparent],
                  ),
                ),
                Positioned(
                  top: MediaQuery.of(context).size.height * 0.48 + (_float3.value * 18),
                  left: MediaQuery.of(context).size.width * 0.58 - (_float3.value * 12),
                  child: _GlowBlob(
                    size: 120,
                    colors: [gold.withOpacity(0.18), Colors.transparent],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 28),
                  child: Column(
                    children: [
                      const SizedBox(height: 18),
                      Expanded(
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            FadeTransition(
                              opacity: _logoOpacity,
                              child: SlideTransition(
                                position: _logoSlide,
                                child: ScaleTransition(
                                  scale: _logoScale,
                                  child: Column(
                                    children: [
                                      const SizedBox(
                                        width: 88,
                                        height: 88,
                                        child: DareOrDateLogoMark(),
                                      ),
                                      const SizedBox(height: 18),
                                      RichText(
                                        textAlign: TextAlign.center,
                                        text: const TextSpan(
                                          style: TextStyle(
                                            fontSize: 38,
                                            height: 0.9,
                                            fontWeight: FontWeight.w900,
                                            letterSpacing: -1.7,
                                            color: text,
                                          ),
                                          children: [
                                            TextSpan(
                                              text: 'Dare\n',
                                              style: TextStyle(color: coral),
                                            ),
                                            TextSpan(
                                              text: 'or\n',
                                              style: TextStyle(
                                                color: textFaint,
                                                fontSize: 18,
                                                fontWeight: FontWeight.w500,
                                                letterSpacing: 1.5,
                                              ),
                                            ),
                                            TextSpan(text: 'Date'),
                                          ],
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ),
                            const SizedBox(height: 24),
                            FadeTransition(
                              opacity: _textOpacity,
                              child: SlideTransition(
                                position: _textSlide,
                                child: const Text(
                                  'SWIPE • DARE • CONNECT',
                                  textAlign: TextAlign.center,
                                  style: TextStyle(
                                    color: textMuted,
                                    fontSize: 12,
                                    letterSpacing: 3.2,
                                    fontWeight: FontWeight.w500,
                                  ),
                                ),
                              ),
                            ),
                            const SizedBox(height: 18),
                            FadeTransition(
                              opacity: _textOpacity,
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  Container(width: 34, height: 1, color: divider),
                                  const SizedBox(width: 10),
                                  Container(
                                    width: 6,
                                    height: 6,
                                    decoration: const BoxDecoration(
                                      color: coral,
                                      shape: BoxShape.circle,
                                    ),
                                  ),
                                  const SizedBox(width: 10),
                                  Container(width: 34, height: 1, color: divider),
                                ],
                              ),
                            ),
                            const SizedBox(height: 28),
                            FadeTransition(
                              opacity: _buttonOpacity,
                              child: ScaleTransition(
                                scale: _buttonScale,
                                child: DecoratedBox(
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(999),
                                    boxShadow: [
                                      BoxShadow(
                                        color: coral.withOpacity(0.22),
                                        blurRadius: 28,
                                        spreadRadius: 2,
                                      ),
                                      const BoxShadow(
                                        color: Colors.black38,
                                        blurRadius: 16,
                                        offset: Offset(0, 6),
                                      ),
                                    ],
                                  ),
                                  child: ElevatedButton(
                                    onPressed: () {},
                                    style: ElevatedButton.styleFrom(
                                      backgroundColor: coral,
                                      foregroundColor: bg,
                                      elevation: 0,
                                      padding: const EdgeInsets.symmetric(
                                        horizontal: 36,
                                        vertical: 16,
                                      ),
                                      shape: RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(999),
                                      ),
                                    ),
                                    child: const Text(
                                      'Get Started',
                                      style: TextStyle(
                                        fontSize: 16,
                                        fontWeight: FontWeight.w800,
                                        color: Colors.white,
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                            const SizedBox(height: 34),
                            FadeTransition(
                              opacity: _statsOpacity,
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: const [
                                  _StatItem(number: '50K+', label: 'Users'),
                                  _StatDivider(),
                                  _StatItem(number: '12K', label: 'Dares'),
                                  _StatDivider(),
                                  _StatItem(number: '4.8★', label: 'Rating'),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(999),
                        child: SizedBox(
                          height: 3,
                          child: LinearProgressIndicator(
                            value: _progressValue.value,
                            backgroundColor: const Color(0xFF211E2A),
                            valueColor: AlwaysStoppedAnimation<Color>(
                              Color.lerp(coral, violet, _progressValue.value * 0.7)!,
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(height: 8),
                    ],
                  ),
                ),
              ],
            );
          },
        ),
      ),
    );
  }
}

class DareOrDateLogoMark extends StatelessWidget {
  const DareOrDateLogoMark({super.key});

  @override
  Widget build(BuildContext context) {
    return CustomPaint(
      painter: _DareOrDateLogoPainter(),
    );
  }
}

class _DareOrDateLogoPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final radius = math.min(size.width, size.height) / 2;

    final glowPaint = Paint()
      ..shader = RadialGradient(
        colors: [
          const Color(0xFFFF4D6D).withOpacity(0.22),
          const Color(0xFFBF5AF2).withOpacity(0.05),
          Colors.transparent,
        ],
      ).createShader(Rect.fromCircle(center: center, radius: radius));
    canvas.drawCircle(center, radius * 0.95, glowPaint);

    final circlePaint = Paint()
      ..shader = const RadialGradient(
        center: Alignment(-0.3, -0.4),
        radius: 1.1,
        colors: [
          Color(0xFFFF7090),
          Color(0xFFC0143A),
        ],
      ).createShader(Rect.fromCircle(center: center, radius: radius * 0.8));
    canvas.drawCircle(center, radius * 0.78, circlePaint);

    final bolt = Path()
      ..moveTo(size.width * 0.47, size.height * 0.20)
      ..lineTo(size.width * 0.34, size.height * 0.49)
      ..lineTo(size.width * 0.47, size.height * 0.46)
      ..lineTo(size.width * 0.39, size.height * 0.77)
      ..lineTo(size.width * 0.66, size.height * 0.43)
      ..lineTo(size.width * 0.50, size.height * 0.48)
      ..close();

    final boltPaint = Paint()..color = Colors.white.withOpacity(0.95);
    canvas.drawPath(bolt, boltPaint);

    final dotPaint = Paint()..color = const Color(0xFFFFD60A);
    canvas.drawCircle(center, radius * 0.07, dotPaint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _GlowBlob extends StatelessWidget {
  const _GlowBlob({required this.size, required this.colors});

  final double size;
  final List<Color> colors;

  @override
  Widget build(BuildContext context) {
    return IgnorePointer(
      child: Container(
        width: size,
        height: size,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          gradient: RadialGradient(colors: colors),
        ),
      ),
    );
  }
}

class _GridPainter extends CustomPainter {
  const _GridPainter({required this.color});

  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    const gap = 48.0;
    final paint = Paint()
      ..color = color
      ..strokeWidth = 1;

    for (double x = 0; x <= size.width; x += gap) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), paint);
    }
    for (double y = 0; y <= size.height; y += gap) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), paint);
    }

    final fadePaint = Paint()
      ..shader = RadialGradient(
        colors: [
          Colors.transparent,
          const Color(0xFF0D0C0F).withOpacity(0.1),
          const Color(0xFF0D0C0F),
        ],
        stops: const [0.45, 0.78, 1.0],
      ).createShader(Offset.zero & size);
    canvas.drawRect(Offset.zero & size, fadePaint);
  }

  @override
  bool shouldRepaint(covariant _GridPainter oldDelegate) => false;
}

class _StatItem extends StatelessWidget {
  const _StatItem({required this.number, required this.label});

  final String number;
  final String label;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 12),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            number,
            style: const TextStyle(
              color: Color(0xFFF0EEF5),
              fontSize: 16,
              fontWeight: FontWeight.w800,
              letterSpacing: -0.4,
            ),
          ),
          const SizedBox(height: 2),
          Text(
            label.toUpperCase(),
            style: const TextStyle(
              color: Color(0xFF4E4A58),
              fontSize: 11,
              fontWeight: FontWeight.w600,
              letterSpacing: 1.1,
            ),
          ),
        ],
      ),
    );
  }
}

class _StatDivider extends StatelessWidget {
  const _StatDivider();

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 1,
      height: 26,
      color: const Color(0xFF2A2733),
      margin: const EdgeInsets.symmetric(horizontal: 4),
    );
  }
}

class PlaceholderHomePage extends StatelessWidget {
  const PlaceholderHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0D0C0F),
      body: const Center(
        child: Text(
          'Home Screen',
          style: TextStyle(
            color: Colors.white,
            fontSize: 24,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
    );
  }
}
