-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 15 Jan 2024 pada 04.23
-- Versi server: 10.6.12-MariaDB-0ubuntu0.22.04.1
-- Versi PHP: 8.1.2-1ubuntu2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `authexample`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `User`
--

CREATE TABLE `User` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `refreshToken` text DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT 0,
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `resetPasswordExpires` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `User`
--

INSERT INTO `User` (`id`, `username`, `email`, `password`, `refreshToken`, `isAdmin`, `resetPasswordToken`, `resetPasswordExpires`, `createdAt`, `updatedAt`) VALUES
('5e209376e72f21bfe2525d6e', 'Aldi', 'aldi@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$ocJ9gz2dNoMXZst3Lksxhg$nBHY2+OiRRJLGUAuJbDtPVkynVWeknArXP7MP9m4zvI', NULL, 0, NULL, NULL, '2024-01-14 21:21:09', '2024-01-14 21:21:09'),
('69156458662440c8f010aab0', 'Ihwannh', 'ihwannh96@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$BCv2zRgreZtl3VqgUrUmGA$lVrLbp8sUiDjjSPniAzNQ0BS+m9272PMHXZLN7h4mkw', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTE1NjQ1ODY2MjQ0MGM4ZjAxMGFhYjAiLCJ1c2VybmFtZSI6Iklod2FubmgiLCJlbWFpbCI6Imlod2Fubmg5NkBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MDUyNjcxMzAsImV4cCI6MTcwNTg3MTkzMH0.YPu0l45S2dJ_od8G-sigzkpMLv7j12-Tdr10n3q66MQ', 1, NULL, NULL, '2024-01-14 21:18:44', '2024-01-14 21:18:50');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_username_unique` (`username`),
  ADD UNIQUE KEY `User_email_unique` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
