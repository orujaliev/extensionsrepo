// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "js-learn" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	// const disposable = vscode.commands.registerCommand('js-learn.helloWorld', function () {
	// 	// The code you place here will be executed every time your command is executed

	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('success is not luck, it is efforts everyday');
	// });
	const disposable = vscode.commands.registerCommand('js-learn.Letithappen', function () {

    const sitatlar = [
        'Inkişaf təkrarlanan sonsuz bir prosesdir',
        'Uğur şans deyil, gündəlik şeylərdir',
        'Dünya səndən kim olduğunu soruşacaq, əgər bilmirsənsə o sənə deyəcək (Carl Jung).',
        'Əgər kodunda Bug varsa, Productionda mutləq çıxacaq. Mörfi qanunlarından.',
        'Əgər vaxtın olanda kod yazmirsansa, işin olanda heç yazmayacaqsan',
		'Süuraltınızı şüurlu hala gətirənə qədər o həyatınızı istiqamətləndirəcək, siz buna taleh deyəcəksiniz.(Carl Jung)',
		'Məntiq sizi A nöqtəsindən B nöqtəsinə aparacaq Təxəyyül hər yerə. (Albert Einstein)',
		'Öz yolunu tapdıqdan sonra, hər kəsin fikri sadəcə stringə çevrilir',
		'Errorlar heç vaxt yox olmur, Onunla yaşamağı öyrənirsən.',
		'Sən düşündüyündən daha güclüsən',
		'Zeka insana verilə bilir, amma istiqamət insanın öz seçimi olur.',
		''
    ];

    const random = Math.floor(Math.random() * sitatlar.length);
    vscode.window.showInformationMessage(sitatlar[random]);
});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}

