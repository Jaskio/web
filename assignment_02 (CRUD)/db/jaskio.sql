-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 24, 2017 at 08:27 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jaskio`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `subtitle` text NOT NULL,
  `content` text NOT NULL,
  `img` text NOT NULL,
  `date` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `subtitle`, `content`, `img`, `date`) VALUES
(1, 'The media is not the world and 24 other ideas about 2016', '7 observations, 10 borrowed ideas, 4 exercises in metaphor, 3 hopes, and 1 story to recalibrate our sense of a dangerous future', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat augue tortor, eget sollicitudin augue aliquet vitae. Pellentesque suscipit enim ipsum, et vulputate sapien gravida vitae. Maecenas id risus et nisl finibus dictum. Suspendisse iaculis porta efficitur. Morbi ut euismod metus, vel ultricies magna. Donec sagittis ornare condimentum. Quisque lacinia eu purus ac maximus.\r\n\r\nMaecenas luctus, urna eu vestibulum aliquet, metus augue tincidunt nibh, in cursus metus justo eget lacus. Aenean facilisis arcu vel dui pharetra, in tempor elit congue. Ut orci ante, sodales ut ante a, condimentum malesuada elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse cursus sed lorem a volutpat. Phasellus est lacus, luctus quis massa eget, varius malesuada arcu. Vivamus porta ante in lacus faucibus, quis porta est eleifend. Mauris tristique, tortor sit amet lacinia aliquet, metus ligula sagittis metus, ac dignissim est velit in dolor. Ut non vestibulum risus. Phasellus id ante sollicitudin mi interdum suscipit iaculis eget ipsum. Cras congue erat eu lacus maximus sodales. Mauris elit libero, malesuada ut posuere nec, scelerisque eu velit. Pellentesque fermentum mauris turpis, quis pellentesque nunc imperdiet quis. Nullam in odio turpis.', 'uploads/image1.jpg', '23th January, 2017'),
(3, 'Uber and Seamless ads reveal how Silicon Valley is screwing us', 'Duis tincidunt suscipit massa at cursus. Etiam pretium sed neque ut dapibus. Etiam dignissim, elit at tempor lacinia, lacus libero pulvinar lectus, et porttitor dolor nunc ac nisl. Etiam sit amet finibus massa.', 'Duis sit amet dapibus tellus, tincidunt interdum diam. Etiam nec faucibus metus. Aenean euismod dictum mi id finibus. Donec lorem ligula, pretium a urna dignissim, porta volutpat justo. Nunc consectetur, lorem non scelerisque luctus, dui lacus laoreet lectus, ut ultricies nibh ante sed elit. Aliquam ac egestas metus. Aenean hendrerit eleifend feugiat. Etiam vehicula nulla nec urna tincidunt tincidunt. In nec nisl posuere, eleifend leo accumsan, venenatis leo. Quisque finibus ullamcorper turpis, sed faucibus massa sollicitudin eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut rhoncus interdum facilisis.\r\n\r\nCras gravida nisl magna, eu luctus ipsum lacinia sit amet. In at fermentum neque. Morbi consequat iaculis arcu, vel porttitor ex congue vel. Vivamus accumsan diam nisi, a commodo magna auctor ut. Donec ac enim id est faucibus tempus. Pellentesque vitae vulputate nulla. Integer id eleifend leo. Maecenas facilisis faucibus neque, eu sagittis dui. Nullam sollicitudin lorem nec magna maximus, eget suscipit lacus posuere. In vitae maximus quam. Duis at nisl vitae dui vestibulum efficitur. In hac habitasse platea dictumst. Vestibulum magna tellus, eleifend vel dignissim eget, scelerisque ut ligula. Sed nec nisl porta, venenatis magna ac, faucibus risus. Praesent nec molestie neque, vel imperdiet urna. Nam tincidunt nisi sed nibh finibus maximus.', 'uploads/image2.jpg', '23th January, 2017'),
(4, 'We Used To Have 6 More Letters In Our Alphabet', 'Mauris bibendum, nisi at blandit condimentum, purus ex eleifend urna, ut rhoncus enim mauris at nisl. Nunc pellentesque lacus odio, semper porttitor ipsum tempus at', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis tincidunt sapien, quis accumsan felis blandit luctus. Donec ultrices, eros ac faucibus dapibus, urna ipsum interdum metus, eget interdum risus est lacinia metus. Sed id nulla lacinia tortor aliquet ultrices. In elementum velit quis bibendum elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras sollicitudin pellentesque massa, ut sodales dolor molestie eget. Donec est erat, placerat a pharetra et, convallis sit amet tellus. Sed rutrum, lectus et vehicula maximus, turpis libero sodales enim, sed pellentesque lacus lacus id nunc. Suspendisse semper massa a lacus ullamcorper, a accumsan massa accumsan. Morbi quam tortor, efficitur porta lacinia et, cursus vitae ipsum.\r\n\r\nSed et semper erat. Nam ornare arcu in elit pellentesque malesuada in et magna. Aenean dictum leo sed nulla tempor, sed ultricies ipsum scelerisque. Ut ac magna nec lacus maximus maximus vel vel nisl. Duis nec aliquet purus. Pellentesque efficitur pretium risus. Morbi feugiat est metus, scelerisque finibus metus mattis vitae. Aenean nibh velit, porttitor commodo interdum id, tincidunt vel dui. Nullam vehicula libero tempus nibh tincidunt, vitae varius tortor hendrerit. Integer rhoncus, eros convallis sodales tincidunt, lacus felis viverra diam, ac varius ipsum massa quis diam. Ut interdum, nisl semper ullamcorper iaculis, velit risus mollis est, ac commodo odio purus eget orci. Nunc non massa mi. Fusce commodo ipsum pellentesque, lobortis felis ut, mattis quam. Nulla lectus massa, imperdiet non porttitor ut, molestie ut sem. Sed sit amet pellentesque ligula.', 'uploads/image3.jpg', '23th January, 2017'),
(5, 'The Pentagon Can\'t Rely on This Turkish Air Base', 'Quisque tincidunt rhoncus sagittis. Pellentesque ut leo vel felis mattis sodales. Quisque id ligula lacus', 'Phasellus sed vulputate augue. Nunc efficitur tristique pulvinar. Suspendisse porta purus nec tempus consequat. Proin posuere interdum tempus. Proin lectus augue, maximus sed mauris vel, pellentesque vulputate neque. Vestibulum sit amet tellus consequat, efficitur nunc in, finibus eros. Phasellus dictum bibendum sapien, sed dapibus libero suscipit ut. Fusce leo urna, tempus non mi ac, sagittis ornare purus. Etiam sagittis ac mauris ac convallis. Nam nec enim sagittis, tempus nisi ac, facilisis sapien. Proin tristique rhoncus felis, in vulputate est pulvinar vel. Ut mattis ex in ligula rhoncus convallis. Quisque a ullamcorper eros.\r\n\r\nMauris eleifend consectetur nunc, ac eleifend felis volutpat sed. Nulla non neque leo. Nullam vehicula fringilla ligula, nec molestie tortor. Pellentesque accumsan magna sit amet tortor semper porttitor. Nulla quis luctus sem, ut malesuada felis. Nullam nulla nibh, fringilla a nisi nec, mattis aliquam tellus. In vehicula lorem ut ipsum sagittis, et faucibus ante dictum. Integer et sem leo. Suspendisse tortor ipsum, posuere non nulla non, cursus aliquet lectus. Sed sed turpis sed lacus volutpat tristique vel et justo. Aliquam nec nunc auctor elit hendrerit mattis quis ut dui. Cras cursus risus sed nisl convallis venenatis.', 'uploads/image4.jpg', '23th January, 2017'),
(6, 'Brace for the oil, food and financial crash of 2018', 'Aenean ipsum nunc, vehicula vitae feugiat quis, porttitor vel mauris. Pellentesque dolor orci, viverra at urna id, molestie posuere felis. Fusce ultricies accumsan risus interdum hendrerit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet pretium justo, nec fringilla ex pulvinar ac. Nulla bibendum risus eros, non aliquet enim vestibulum a. Etiam rutrum nibh dui, a ullamcorper turpis placerat ut. Sed et urna pharetra leo cursus egestas. Quisque eget augue est. Integer id ex scelerisque, tincidunt ligula at, viverra felis. Suspendisse ipsum libero, ultrices in egestas eget, congue nec velit.\r\n\r\nVestibulum tincidunt porta felis, et rutrum erat vulputate vel. Proin vitae mauris hendrerit, cursus leo vestibulum, maximus dolor. In at felis sem. Proin commodo nulla et nisi ornare, non rutrum nulla iaculis. Donec non iaculis lectus. Quisque varius turpis mollis, venenatis ipsum vitae, tempus sem. Sed velit neque, iaculis vel metus non, faucibus ullamcorper purus. Mauris rhoncus quis nisi luctus ornare. Phasellus in purus erat. Sed eleifend aliquam leo, ac blandit augue hendrerit vitae. Integer quis turpis vel elit tempor iaculis. Donec sagittis mi scelerisque, efficitur diam et, volutpat lorem. Aenean et arcu ac tortor rutrum ullamcorper id at risus.', 'uploads/image5.jpg', '23th January, 2017'),
(7, 'First, Destroy the Federal Workforce-Then Rule Like...', 'Nam porttitor hendrerit lectus euismod porta. Ut odio augue, consequat a eros in, dapibus tristique purus. Nullam lacinia turpis et eleifend egestas', 'Etiam scelerisque interdum mi tristique gravida. Nunc enim orci, suscipit ut dictum id, vehicula sed erat. Fusce ullamcorper eros vitae est vehicula, at congue urna efficitur. Donec euismod mi elit, et convallis ipsum congue a. Donec eget laoreet nisi. Nam in varius lacus. Nulla tincidunt neque turpis, in elementum lectus vulputate vel. Nunc eu velit massa. Phasellus in ipsum ut lorem vestibulum cursus. Proin tristique laoreet odio id lacinia. Nullam sit amet pretium leo, nec ultrices diam.\r\n\r\nFusce a eleifend orci, sed tincidunt ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tempus, lorem vitae egestas interdum, orci eros eleifend mauris, non imperdiet felis metus sit amet turpis. Suspendisse elementum orci at ipsum facilisis volutpat. Vivamus a turpis ac ipsum vehicula vulputate in laoreet leo. Morbi scelerisque sagittis quam vel feugiat. Vestibulum sit amet lacinia velit. Donec id rutrum elit. Etiam facilisis volutpat eros, interdum ultrices enim tristique quis. Quisque commodo ornare velit, vitae semper massa convallis eu. Vestibulum convallis semper hendrerit.\r\n\r\nNunc pharetra venenatis elit et pellentesque. In ullamcorper, elit et scelerisque congue, nibh nulla commodo nisi, vitae rhoncus mauris nunc et mauris. Vestibulum vestibulum mi diam, non condimentum est porttitor nec. Praesent fermentum, elit sed posuere ullamcorper, odio felis viverra mauris, eget cursus ante justo eget lacus.', 'uploads/image6.jpg', '23th January, 2017');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', '81dc9bdb52d04dc20036dbd8313ed055');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
