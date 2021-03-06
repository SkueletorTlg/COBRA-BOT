const cobra = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('conventer');
const enmsg = 'π° ππππππ πππ€π₯ - βπ ππ£πππ π₯ π°' + '\n\n' + 
              'π‘ Usage: ' + '*.mp4enhance*' + '\n' +
              'Desc: ' + 'Enhance videoβs quality.' + '\n\n' +
              'π‘ Usage: ' + '*.interp*' + '\n' +
              'Desc: ' + 'Increases the FPS of the video.' + '\n\n' +
              'π‘ Usage: ' + '*.mp4slowmo*' + '\n' +
              'Desc: ' + 'Applies true-slowmo to non-slow motion videos.' + '\n\n' +
              'π‘ Usage: ' + '*.x4mp4*' + '\n' +
              'Desc: ' + 'Reduce videoβs quality by 75%.' + '\n\n' +
              'π‘ Usage: ' + '*.x2mp4*' + '\n' +
              'Desc: ' + 'Reduce videoβs quality by 50%.' + '\n\n' +
              'π‘ Usage: ' + '*.gif*' + '\n' +
              'Desc: ' + 'Converts video to gif.' + '\n\n' +
              'π‘ Usage: ' + '*.agif*' + '\n' +
              'Desc: ' + 'Converts video to voiced gif.' + '\n\n' +
              'π‘ Usage: ' + '*.mp4blur*' + '\n' +
              'Desc: ' + 'Blurs the background of the video.' + '\n\n' +
              'π‘ Usage: ' + '*.mp4stab*' + '\n' +
              'Desc: ' + 'Decreases the vibration of the video.' + '\n\n' +
              'π‘ Usage: ' + '*.mp4rainbow*' + '\n' +
              'Desc: ' + 'Applies a rainbow effect to video.' + '\n\n' +
              'π‘ Usage: ' + '*.mp4color*' + '\n' +
              'Desc: ' + 'Makes the colors of the video more vivid and beautiful.' + '\n\n' +
              'π‘ Usage: ' + '*.mp4art*' + '\n' +
              'Desc: ' + 'Applies a art effect to the video.' + '\n\n' +
              'π‘ Usage: ' + '*.mp4negative*' + '\n' +
              'Desc: ' + 'Applies a negative color filter to the video.' + '\n\n' +
              'π‘ Usage: ' + '*.mp4vintage*' + '\n' +
              'Desc: ' + 'Applies a nostalgic effect to video.' + '\n\n' +
              'π‘ Usage: ' + '*.mp4bw*' + '\n' +
              'Desc: ' + 'Applies a monochrome effect to video.' + '\n\n' +
              'π‘ Usage: ' + '*.mp4reverse*' + '\n' +
              'Desc: ' + 'Plays the video in reverse.' + '\n\n' +
              'π‘ Usage: ' + '*.mp4edge*' + '\n' +
              'Desc: ' + 'Applies a edge effect to the video.' + '\n\n' +
              'π‘ Usage: ' + '*.mp4image*' + '\n' +
              'Desc: ' + 'Converts photo to 5 sec video.' + '\n\n' +
              'π‘ Usage: ' + '*.spectrum*' + '\n' +
              'Desc: ' + 'Converts the spectrum of sound into video.' + '\n\n' +
              'π‘ Usage: ' + '*.waves*' + '\n' +
              'Desc: ' + 'Converts the wave range of sound to video.' + '\n\n' +
              'π‘ Usage: ' + '*.frequency*' + '\n' +
              'Desc: ' + 'Converts the frequency range of sound to video.' + '\n\n' +
              'π‘  Usage: ' + '*.avec*' + '\n' +
              'Desc: ' + 'Converts the histogram of sound to video.' + '\n\n' +
              'π‘ Usage: ' + '*.volumeaudio*' + '\n' +
              'Desc: ' + 'Converts the decibel value of the sound into video.' + '\n\n' +
              'π‘ Usage: ' + '*.cqtaudio*' + '\n' +
              'Desc: ' + 'Converts the CQT value of audio to video.' + '\n\n' +
              'π‘ Usage: ' + '*.mp3eq*' + '\n' +
              'Desc: ' + 'Adjusts the sound to a crystal clear level.' + '\n\n' +
              'π‘ Usage: ' + '*.mp3bass*' + '\n' +
              'Desc: ' + 'Adds crystal bass without distorting the sound.' + '\n\n' +
              'π‘ Usage: ' + '*.mp3crusher*' + '\n' +
              'Desc: ' + 'Distorts the sound, makes ridiculous.' + '\n\n' +
              'π‘ Usage: ' + '*.mp3reverse*' + '\n' +
              'Desc: ' + 'Plays the sound in reverse.' + '\n\n' +
              'π‘ Usage: ' + '*.mp3pitch*' + '\n' +
              'Desc: ' + 'Makes the sound thinner and faster.' + '\n\n' +
              'π‘ Usage: ' + '*.mp3low*' + '\n' +
              'Desc: ' + 'Makes the sound deep and slower.' + '\n\n' +
              'π‘ Usage: ' + '*.x2mp3*' + '\n' +
              'Desc: ' + 'Makes the sound twice as fast.' + '\n\n' +
              'π‘ Usage: ' + '*.mp3volume*' + '\n' +
              'Desc: ' + 'Increase sound level so much.' + '\n\n' +
              'π‘ Usage: ' + '*.bwimage*' + '\n' +
              'Desc: ' + 'Applies a monochrome effect to image.' + '\n\n' +
              'π‘ Usage: ' + '*.vintageimage*' + '\n' +
              'Desc: ' + 'Applies a vinatge effect to photo.' + '\n\n' +
              'π‘ Usage: ' + '*.edgeimage*' + '\n' +
              'Desc: ' + 'Applies a edge effect to the photo.' + '\n\n' +
              'π‘ Usage: ' + '*.enhanceimage*' + '\n' +
              'Desc: ' + 'Makes the photo clearer.' + '\n\n' +
              'π‘ Usage: ' + '*.blurimage*' + '\n' +
              'Desc: ' + 'Blurs the background of the photo.' + '\n\n' +
              'π‘ Usage: ' + '*.grenimage*' + '\n' +
              'Desc: ' + 'Applies grain effect to the photo.' + '\n\n' +
              'π‘ Usage: ' + '*.negativeimage*' + '\n' +
              'Desc: ' + 'Applies a negative color filter to the photo.' + '\n\n' +
              'π‘ Usage: ' + '*.rainbowimage*' + '\n' +
              'Desc: ' + 'Applies rainbow effect to the photo.' + '\n\n' +
              'π‘ Usage: ' + '*.colorimage*' + '\n' +
              'Desc: ' + 'It makes the colors of the photo more vivid and attractive.' + '\n\n' +
              'π‘ Usage: ' + '*.artimage*' + '\n' +
              'Desc: ' + 'Applies a art effect to the photo.' + '\n\n' 

const simsg = 'π° ππππππ πππ€π₯ - βπ ππ£πππ π₯ π°' + '\n\n' + 
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp4enhance*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ·ΰ·ΰ· ΰΆΰ·ΰΆ«ΰ·ΰΆ­ΰ·ΰΆΈΰΆΰΆ·ΰ·ΰ·ΰΆΊ ΰ·ΰ·ΰΆ©ΰ· ΰΆ―ΰ·ΰΆΊΰ·ΰΆ«ΰ· ΰΆΰΆ»ΰΆ±ΰ·ΰΆ±.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.interp*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ·ΰ·ΰ· FPS ΰ·ΰ·ΰΆ©ΰ· ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp4slowmo*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ· ΰ·ΰΆ³ΰ·ΰ· slow-motion ΰ·ΰ·ΰΆ―ΰΆ±ΰ· ΰΆΰΆ­.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.x4mp4*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ·ΰ·ΰ· ΰΆΰ·ΰΆ«ΰ·ΰΆ­ΰ·ΰΆΈΰΆΰΆ·ΰ·ΰ·ΰΆΊ 75%ΰΆΰ·ΰΆ±ΰ· ΰΆΰΆ©ΰ· ΰΆΰΆ»ΰΆ±ΰ·ΰΆ±.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.x2mp4*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ·ΰ·ΰ· ΰΆΰ·ΰΆ«ΰ·ΰΆ­ΰ·ΰΆΈΰΆΰΆ·ΰ·ΰ·ΰΆΊ 50%ΰΆΰ·ΰΆ±ΰ· ΰΆΰΆ©ΰ· ΰΆΰΆ»ΰΆ±ΰ·ΰΆ±.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.gif*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ·ΰ· gif ΰΆΆΰ·ΰΆ§ ΰΆ΄ΰΆ»ΰ·ΰ·ΰΆ»ΰ·ΰΆ­ΰΆ±ΰΆΊ ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.agif*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ·ΰ· voiced gif ΰΆΆΰ·ΰΆ§ ΰΆ΄ΰΆ»ΰ·ΰ·ΰΆ»ΰ·ΰΆ­ΰΆ±ΰΆΊ ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp4blur*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ· ΰΆ΄ΰΆ§ΰΆΊΰ· ΰΆ΄ΰ·ΰ·ΰΆΆΰ·ΰΆΈ ΰΆΆΰ·ΰΆ³ ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp4stab*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ·ΰ·ΰ· ΰΆΰΆΈΰ·ΰΆ΄ΰΆ±ΰΆΊ ΰΆΰΆ©ΰ· ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp4rainbow*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰΆ―ΰ·ΰΆ―ΰ·ΰΆ±ΰ· ΰΆΆΰΆ½ΰΆ΄ΰ·ΰΆΈΰΆΰ· ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ· ΰΆ΄ΰΆ§ΰΆΊΰΆ§ ΰΆΊΰ·ΰΆ―ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp4color*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ·ΰ·ΰ· ΰ·ΰΆ»ΰ·ΰΆ« ΰ·ΰΆ©ΰ·ΰΆ­ΰ· ΰ·ΰ·ΰΆ ΰ·ΰΆ­ΰ·ΰΆ» ΰ·ΰ· ΰΆ½ΰ·ΰ·ΰ·ΰΆ± ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp4art*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ·ΰ· ΰ·ΰΆ³ΰ·ΰ· ΰΆΰΆ½ΰ·ΰΆ­ΰ·ΰΆΈΰΆ ΰΆΆΰΆ½ΰΆ΄ΰ·ΰΆΈΰΆΰ· ΰΆΊΰ·ΰΆ―ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp4negative*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ·ΰ·ΰΆ§ ΰ·ΰ·ΰΆ« ΰ·ΰΆ»ΰ·ΰΆ« filter ΰΆΊΰ·ΰΆ―ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp4vintage*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ· ΰΆ΄ΰΆ§ΰΆΊΰΆ§ ΰ·ΰ·ΰΆΰ·ΰΆ» ΰ·ΰ·ΰΆΰ·ΰΆΈΰΆΰ· ΰΆΊΰ·ΰΆ―ΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp4bw*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ· ΰ·ΰΆ³ΰ·ΰ· black and white effect ΰΆΊΰ·ΰΆ―ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp4reverse*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ·ΰ· reverse ΰΆΰΆ»ΰΆ±ΰ·ΰΆ±.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp4edge*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ· ΰΆ΄ΰΆ§ΰΆΊΰΆ§ edge effect ΰΆΊΰ·ΰΆ―ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp4image*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰΆ‘ΰ·ΰΆΊΰ·ΰΆ»ΰ·ΰΆ΄ΰΆΊ ΰΆ­ΰΆ­ΰ·ΰΆ΄ΰΆ» 5 ΰΆ ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ·ΰ·ΰΆΰ· ΰΆΆΰ·ΰΆ§ ΰΆ΄ΰΆ»ΰ·ΰ·ΰΆ»ΰ·ΰΆ­ΰΆ±ΰΆΊ ΰΆΰΆ»ΰΆ±ΰ·ΰΆ±.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.spectrum*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰΆΆΰ·ΰΆ― ΰ·ΰΆ½ ΰ·ΰΆ»ΰ·ΰΆ«ΰ·ΰ·ΰΆ½ΰ·ΰΆΊ ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ· ΰΆΆΰ·ΰΆ§ ΰΆ΄ΰΆ»ΰ·ΰ·ΰΆ»ΰ·ΰΆ­ΰΆ±ΰΆΊ ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.waves*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰΆΆΰ·ΰΆ―ΰΆΊΰ· ΰΆ­ΰΆ»ΰΆΰΆ ΰΆ΄ΰΆ»ΰ·ΰ·ΰΆΊ ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ· ΰΆΆΰ·ΰΆ§ ΰΆ΄ΰΆ»ΰ·ΰ·ΰΆ»ΰ·ΰΆ­ΰΆ±ΰΆΊ ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.frequency*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰΆΆΰ·ΰΆ―ΰΆΊΰ· ΰ·ΰΆΰΆΰ·ΰΆΊΰ·ΰΆ­ ΰΆ΄ΰΆ»ΰ·ΰ·ΰΆΊ ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ· ΰΆΆΰ·ΰΆ§ ΰΆ΄ΰΆ»ΰ·ΰ·ΰΆ»ΰ·ΰΆ­ΰΆ±ΰΆΊ ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘  ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.avec*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰΆΆΰ·ΰΆ―ΰΆΊΰ· ΰ·ΰ·ΰ·ΰ·ΰΆ§ΰ·ΰΆΰ·ΰΆ»ΰ·ΰΆΈΰ· ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ· ΰΆΆΰ·ΰΆ§ ΰΆ΄ΰΆ»ΰ·ΰ·ΰΆ»ΰ·ΰΆ­ΰΆ±ΰΆΊ ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.volumeaudio*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰΆΆΰ·ΰΆ―ΰΆΊΰ· ΰΆ©ΰ·ΰ·ΰ·ΰΆΆΰΆ½ΰ· ΰΆΰΆΰΆΊ ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ· ΰΆΆΰ·ΰΆ§ ΰΆ΄ΰΆ»ΰ·ΰ·ΰΆ»ΰ·ΰΆ­ΰΆ±ΰΆΊ ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.cqtaudio*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'CQT ΰΆΰΆΰΆΊ ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ· ΰΆ΄ΰΆ§ΰΆΊΰΆΰ· ΰΆΆΰ·ΰΆ§ ΰΆ΄ΰΆ»ΰ·ΰ·ΰΆ»ΰ·ΰΆ­ΰΆ±ΰΆΊ ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp3eq*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰΆΆΰ·ΰΆ―ΰΆΊ ΰΆ΄ΰ·ΰ·ΰ·ΰΆ―ΰ·ΰΆ½ΰ· ΰΆ΄ΰ·ΰ·ΰ·ΰΆ―ΰ·ΰΆ½ΰ· ΰΆΈΰΆ§ΰ·ΰΆ§ΰΆΈΰΆΰΆ§ ΰ·ΰΆΰ·ΰΆ±ΰ·ΰΆ±.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp3bass*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰΆΆΰ·ΰΆ―ΰΆΊ ΰ·ΰ·ΰΆΰ·ΰΆ­ΰ· ΰΆ±ΰ·ΰΆΰΆ» Cristal Bass ΰΆΰΆΰΆ­ΰ· ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp3crusher*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰΆΆΰ·ΰΆ―ΰΆΊ ΰ·ΰ·ΰΆΰ·ΰΆ­ΰ· ΰΆΰΆ»ΰΆΊΰ·, ΰ·ΰ·ΰ·ΰ·ΰΆΊ ΰΆΰΆ΄ΰΆ―ΰ·ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp3reverse*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰΆΆΰ·ΰΆ―ΰΆΊ reverse ΰ·ΰ·ΰΆ―ΰΆ±ΰΆΊ ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp3pitch*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰΆΆΰ·ΰΆ―ΰΆΊ ΰΆ­ΰ·ΰΆ±ΰ· ΰ·ΰ· ΰ·ΰ·ΰΆΰ·ΰΆ­ΰ· ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp3low*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰΆΆΰ·ΰΆ―ΰΆΊ ΰΆΰ·ΰΆΉΰ·ΰΆ»ΰ· ΰ·ΰ· ΰΆΈΰΆ±ΰ·ΰΆ―ΰΆΰ·ΰΆΈΰ· ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.x2mp3*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰΆΆΰ·ΰΆ―ΰΆΊ ΰΆΈΰ·ΰΆ±ΰ· ΰΆ―ΰ·ΰΆΰ·ΰΆ«ΰΆΊΰΆΰ· ΰ·ΰ·ΰΆΰ·ΰΆ­ΰ· ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.mp3volume*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰΆΆΰ·ΰΆ― ΰΆΈΰΆ§ΰ·ΰΆ§ΰΆΈ ΰΆΰΆ­ΰΆ»ΰΆΈΰ· ΰ·ΰ·ΰΆ©ΰ· ΰΆΰΆ»ΰΆ±ΰ·ΰΆ±.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.bwimage*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰΆ»ΰ·ΰΆ΄ΰΆΊΰΆ§ black and white effect ΰΆΊΰ·ΰΆ―ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.vintageimage*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰ·ΰ·ΰΆ©ΰ·ΰΆΊΰ· ΰΆ΄ΰΆ§ΰΆΊΰΆ§ vintage effect ΰΆΊΰ·ΰΆ―ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.edgeimage*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰΆ‘ΰ·ΰΆΊΰ·ΰΆ»ΰ·ΰΆ΄ΰΆΊΰ·ΰ·ΰ· edge effect ΰΆΊΰ·ΰΆ―ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.enhanceimage*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰΆ‘ΰ·ΰΆΊΰ·ΰΆ»ΰ·ΰΆ΄ΰΆΊ ΰ·ΰΆ©ΰ·ΰΆ­ΰ· ΰΆ΄ΰ·ΰ·ΰ·ΰΆ―ΰ·ΰΆ½ΰ· ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.blurimage*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰΆ‘ΰ·ΰΆΊΰ·ΰΆ»ΰ·ΰΆ΄ΰΆΊΰ· ΰΆ΄ΰ·ΰ·ΰΆΆΰ·ΰΆΈ ΰΆΆΰ·ΰΆ³ ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.grenimage*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰΆ‘ΰ·ΰΆΊΰ·ΰΆ»ΰ·ΰΆ΄ΰΆΊ ΰ·ΰΆ³ΰ·ΰ· grain effect ΰΆΊΰ·ΰΆ―ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.negativeimage*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰΆ‘ΰ·ΰΆΊΰ·ΰΆ»ΰ·ΰΆ΄ΰΆΊ ΰ·ΰΆ³ΰ·ΰ· ΰ·ΰ·ΰΆ« ΰ·ΰΆ»ΰ·ΰΆ« filter ΰΆΊΰ·ΰΆ―ΰΆ±ΰ·ΰΆ±.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.rainbowimage*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰΆ‘ΰ·ΰΆΊΰ·ΰΆ»ΰ·ΰΆ΄ΰΆΊ ΰ·ΰΆ³ΰ·ΰ· ΰΆ―ΰ·ΰΆ―ΰ·ΰΆ±ΰ·ΰΆ± filter ΰΆΊΰ·ΰΆ―ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.colorimage*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰΆΰΆΈΰΆΰ·ΰΆ±ΰ· ΰΆ‘ΰ·ΰΆΊΰ·ΰΆ»ΰ·ΰΆ΄ΰΆΊΰ· ΰ·ΰΆ»ΰ·ΰΆ« ΰ·ΰΆ©ΰ·ΰΆ­ΰ· ΰ·ΰ·ΰΆ ΰ·ΰΆ­ΰ·ΰΆ» ΰ·ΰ· ΰΆΰΆΰΆ»ΰ·ΰ·ΰΆ«ΰ·ΰΆΊ ΰΆΰΆ»ΰΆΊΰ·.' + '\n\n' +
              'π‘ ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊ: ' + '*.artimage*' + '\n' +
              'ΰ·ΰ·ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊ: ' + 'ΰΆ‘ΰ·ΰΆΊΰ·ΰΆ»ΰ·ΰΆ΄ΰΆΊ ΰ·ΰΆ³ΰ·ΰ· art effect ΰΆΊΰ·ΰΆ―ΰΆΊΰ·.' + '\n\n'
if (Config.WORKTYPE == 'private') {
    if (Config.LANG == 'SI') {
         cobra.addCommand({pattern: 'xmedia$', fromMe: true,  deleteCommand: false, desc: Lang.XMEDΔ°A_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,simsg, MessageType.text,{quoted: message.data});
        }));
    }
    
    else if (Config.LANG == 'EN') {
        cobra.addCommand({pattern: 'xmedia$', fromMe: true, desc: Lang.XMEDΔ°A_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,enmsg, MessageType.text,{quoted: message.data});
        }));
    }
}
    
if (Config.WORKTYPE == 'public') {
    if (Config.LANG == 'SI') {
        cobra.addCommand({pattern: 'xmedia$', fromMe: false,  deleteCommand: false, desc: Lang.XMEDΔ°A_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,simsg, MessageType.text,{quoted: message.data});
        }));
    }
    
    else if (Config.LANG == 'EN') {
        cobra.addCommand({pattern: 'xmedia$', fromMe: false, desc: Lang.XMEDΔ°A_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,enmsg, MessageType.text,{quoted: message.data});
        }));
    }
}
  
