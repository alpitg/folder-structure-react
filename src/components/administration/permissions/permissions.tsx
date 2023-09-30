import React, { useEffect, useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import "./permissions.scss";

const PermissionsApp = ({
  nodes,
  selectedNodes,
  onSelectionChange,
}: {
  nodes: any[];
  selectedNodes: any[];
  onSelectionChange(checked: any[]): void;
}) => {
  const [treeState, setTreeState] = useState({
    checked: [],
    expanded: [],
  });

  //#endregion

  useEffect(() => {
    setTreeState((prev: any) => ({
      ...prev,
      checked: selectedNodes,
      expanded: getNodeIds(nodes),
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNodes]);

  const getNodeIds = (nodes: any[]) => {
    let ids: any = [];
    nodes?.forEach(({ value, children }) => {
      ids = [...ids, value, ...getNodeIds(children)];
    });
    return ids;
  };

  return (
    <div className="permissions justify-content-center">
      <>
        <CheckboxTree
          nodes={nodes}
          checked={treeState.checked}
          expanded={treeState.expanded}
          onCheck={(checked: any) => {
            setTreeState((prev) => ({ ...prev, checked: checked }));
            onSelectionChange(checked);
          }}
          onExpand={(expanded: any) =>
            setTreeState((prev) => ({ ...prev, expanded: expanded }))
          }
          showExpandAll={true}
          showNodeIcon={false}
          nativeCheckboxes={true}
          icons={{
            check: <span className="pi grey pi-check-circle" />,
            uncheck: <span className="pi grey pi-circle" />,
            halfCheck: <span className="pi grey pi-minus-circle" />,
            expandClose: <span className="pi grey pi-chevron-right" />,
            expandOpen: <span className="pi grey pi-chevron-down" />,
            expandAll: <span className="pi grey pi-plus" />,
            collapseAll: <span className="pi grey pi-minus" />,
            parentClose: <span className="pi grey pi-folder" />,
            parentOpen: <span className="pi grey pi-folder-open" />,
            leaf: <span className="pi grey pi-file" />,
          }}
        />
      </>
    </div>
  );
};

export default PermissionsApp;
