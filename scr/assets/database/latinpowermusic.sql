-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: latinpowermusic
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administradores`
--

DROP TABLE IF EXISTS `administradores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administradores` (
  `id_administrador` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `telefono` bigint NOT NULL,
  `correo` varchar(45) NOT NULL,
  `contrasena` varchar(45) NOT NULL,
  `imagen` varchar(200) NOT NULL,
  PRIMARY KEY (`id_administrador`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administradores`
--

LOCK TABLES `administradores` WRITE;
/*!40000 ALTER TABLE `administradores` DISABLE KEYS */;
INSERT INTO `administradores` VALUES (1,'Guillermo','Serrano Montoya',8112343789,'memos@latinpowermusic.com.mx','Latinpowermusic','admin-perfil.png');
/*!40000 ALTER TABLE `administradores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `albumes`
--

DROP TABLE IF EXISTS `albumes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `albumes` (
  `id_album` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) NOT NULL,
  `precio` decimal(3,2) NOT NULL,
  `descripcion` varchar(45) NOT NULL,
  `año` int NOT NULL,
  `imagen` varchar(200) NOT NULL,
  `id_artista` int NOT NULL,
  PRIMARY KEY (`id_album`),
  KEY `id_artista_idx` (`id_artista`),
  CONSTRAINT `id_artista` FOREIGN KEY (`id_artista`) REFERENCES `artistas` (`id_artista`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albumes`
--

LOCK TABLES `albumes` WRITE;
/*!40000 ALTER TABLE `albumes` DISABLE KEYS */;
/*!40000 ALTER TABLE `albumes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artistas`
--

DROP TABLE IF EXISTS `artistas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artistas` (
  `id_artista` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(45) NOT NULL,
  `imagen` varchar(200) NOT NULL,
  PRIMARY KEY (`id_artista`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artistas`
--

LOCK TABLES `artistas` WRITE;
/*!40000 ALTER TABLE `artistas` DISABLE KEYS */;
/*!40000 ALTER TABLE `artistas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boletos`
--

DROP TABLE IF EXISTS `boletos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boletos` (
  `id_boleto` int NOT NULL AUTO_INCREMENT,
  `precio` decimal(10,0) NOT NULL,
  `asiento` varchar(10) NOT NULL,
  `fecha_evento` date NOT NULL,
  `tipo_boleto` enum('GENERAL','SILVER','GOLD','VIP') NOT NULL,
  PRIMARY KEY (`id_boleto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boletos`
--

LOCK TABLES `boletos` WRITE;
/*!40000 ALTER TABLE `boletos` DISABLE KEYS */;
/*!40000 ALTER TABLE `boletos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lanzamientos`
--

DROP TABLE IF EXISTS `lanzamientos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lanzamientos` (
  `id_lanzamiento` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `descripcion` varchar(45) NOT NULL,
  `año` int NOT NULL,
  `imagen` varchar(200) NOT NULL,
  `id_album` int NOT NULL,
  PRIMARY KEY (`id_lanzamiento`),
  KEY `id_album_idx` (`id_album`),
  CONSTRAINT `id_album` FOREIGN KEY (`id_album`) REFERENCES `albumes` (`id_album`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lanzamientos`
--

LOCK TABLES `lanzamientos` WRITE;
/*!40000 ALTER TABLE `lanzamientos` DISABLE KEYS */;
/*!40000 ALTER TABLE `lanzamientos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `noticias`
--

DROP TABLE IF EXISTS `noticias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `noticias` (
  `id_noticia` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `imagen` varchar(200) NOT NULL,
  PRIMARY KEY (`id_noticia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `noticias`
--

LOCK TABLES `noticias` WRITE;
/*!40000 ALTER TABLE `noticias` DISABLE KEYS */;
/*!40000 ALTER TABLE `noticias` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-05 14:35:23
