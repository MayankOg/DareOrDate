
import 'package:dod/splash.dart';
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
      home:  DareOrDateSplashPage(),
    );
  }
}
