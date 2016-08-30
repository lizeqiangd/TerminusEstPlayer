/**
 * Created by lizeq on 8/22/2016.
 */
export default class PlayerConstant {

    private static prefixed: string = 'tep_';

    static  class_player:string =PlayerConstant.prefixed+'player';

    static class_video: string = PlayerConstant.prefixed + 'video';
    static class_comment: string = PlayerConstant.prefixed + 'comment';

    static class_KokoroVideoController: string = PlayerConstant.prefixed + 'kvc';
    static class_VideoControlButtonManager: string = PlayerConstant.prefixed + 'vcbm';
    static class_videomask: string = PlayerConstant.prefixed + 'videomask';

    static class_btn_KokoroStateUI: string = PlayerConstant.prefixed + 'btn_KokoroStateUI';
    static class_btn_KokoroUI: string = PlayerConstant.prefixed + 'btn_KokoroUI';

    static class_sld_general:string=PlayerConstant.prefixed+'sld_general';
    static class_sld_general_pointer:string=PlayerConstant.prefixed+'sld_general_pointer';
    static class_sld_general_background:string=PlayerConstant.prefixed+'sld_general_background';
    static class_sld_general_buffer:string=PlayerConstant.prefixed+'sld_general_buffer';
    static class_sld_general_play:string=PlayerConstant.prefixed+'sld_general_play';
    static class_sld_general_videojj:string=PlayerConstant.prefixed+'sld_general_videojj';

    static player_videolist: string = PlayerConstant.prefixed + 'videolist';
}