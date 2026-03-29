const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.video,
		C3.Plugins.Sprite,
		C3.Plugins.Audio,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Mouse.Cnds.OnRelease
	];
};
self.C3_JsPropNameTable = [
	{Video: 0},
	{Re: 0},
	{Audio: 0},
	{Keyboard: 0},
	{Mouse: 0},
	{Touch: 0},
	{Mi: 0},
	{So: 0},
	{La: 0},
	{Ti: 0},
	{HDo: 0},
	{Fa: 0},
	{Do: 0}
];

self.InstanceType = {
	Video: class extends self.IWorldInstance {},
	Re: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	Mi: class extends self.ISpriteInstance {},
	So: class extends self.ISpriteInstance {},
	La: class extends self.ISpriteInstance {},
	Ti: class extends self.ISpriteInstance {},
	HDo: class extends self.ISpriteInstance {},
	Fa: class extends self.ISpriteInstance {},
	Do: class extends self.ISpriteInstance {}
}