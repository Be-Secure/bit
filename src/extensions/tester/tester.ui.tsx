import { WorkspaceUI } from '../workspace';

export class TesterUI {
  static id = '@teambit/tester';

  static dependencies = [WorkspaceUI];

  stageKey?: string;

  constructor(private workspace: WorkspaceUI) {}

  static async provider([workspace]: [WorkspaceUI]) {
    const testerUi = new TesterUI(workspace);

    // workspace.registerMenuItem({
    //   label: <TopBarNav to="~tests">Tests</TopBarNav>
    // });

    // workspace.registerPage({
    //   path: '~tests',
    //   children: <TestsPage />
    // });

    return testerUi;
  }
}

export default TesterUI;
