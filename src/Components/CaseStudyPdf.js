import React from 'react'
import { Document, Page, Text, View, PDFViewer } from '@react-pdf/renderer';
function CaseStudyPdf({ caseStudyData }) {
    return (
        <PDFViewer width="100%" height="500">
            <Document>
                <Page>
                    <View>
                        <Text>{caseStudyData.title}</Text>
                        <Text>{caseStudyData.description}</Text>
                        {/* Include other data fields as needed */}
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}

export default CaseStudyPdf
