/*
 * @Author: Nathaniel
 * @Date: 2020-12-25 14:50:04
 */
import 'package:flutter/material.dart';

import 'package:dartfrontend/models/message.dart';

/// ChatMessage is base abstract class for outgoing and incoming message widgets
abstract class ChatMessage extends Widget {
  /// Message content
  Message get message;

  /// Controller of animation for message widget
  AnimationController get animationController;
}
