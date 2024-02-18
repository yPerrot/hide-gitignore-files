import { ExtensionContext, commands, workspace, ConfigurationTarget } from 'vscode';

export function activate(context: ExtensionContext) {
	let disposable = commands.registerCommand('hide-gitignore-files.toggle', () => {
		const configuration = workspace.getConfiguration();
		configuration.update('explorer.excludeGitIgnore', !configuration.get('explorer.excludeGitIgnore'), ConfigurationTarget.Workspace);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {
	
}
